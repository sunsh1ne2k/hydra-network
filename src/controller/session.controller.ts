import { Request, Response, NextFunction } from 'express';
import config from 'config';
import { any } from 'zod';
import { createSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Validate user's password
    const user = await validatePassword(req.body);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create a session
    const session = await createSession(user._id, req.get('user-agent') || '');

    // Generate access token
    const accessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get<string>('jwtAccessTokenTtl') }
    );

    // Generate refresh token
    const refreshToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('jwtRefreshTokenTtl') }
    );

    // Return access & refresh tokens
    return res.json({ accessToken: accessToken, refreshToken: refreshToken });
}
