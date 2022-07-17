import { Request, Response, NextFunction } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import logger from '../utils/logger';

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput['body']>,
    res: Response,
    next: NextFunction
) {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(), 'password'));
    } catch (err: any) {
        logger.error(err);
        return res.status(400).send(err.message);
    }
}
