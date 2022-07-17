import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';
import { boolean } from 'yup';

export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    comparePassword(passwordInput: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

userSchema.methods.comparePassword = async function (
    passwordInput: string
): Promise<boolean> {
    const user = this as UserDocument;

    return bcrypt.compare(passwordInput, user.password).catch((err) => false);
};

userSchema.pre('save', async function (next) {
    let user = this as UserDocument;
    if (!user.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));

    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
