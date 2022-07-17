import jwt from 'jsonwebtoken';
import config from 'config';
import 'dotenv/config';

const publicKey = config.get<string>('jwtPublicKey');
const privateKey = config.get<string>('jwtPrivateKey');
// console.log(`pbk: ${publicKey} \npvk: ${privateKey}`);
// const publicKey = process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY;
// const privateKey = process.env.JWT_ACCESS_TOKEN_SECRET_KEY;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'HS256',
    });
}

function verifyJwt(token: string) {
    try {
        const decodedToken = jwt.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decodedToken: decodedToken,
        };
    } catch (err: any) {
        return {
            valid: false,
            expiried: err.message === 'jwt expired',
            decodedToken: null,
        };
    }
}
