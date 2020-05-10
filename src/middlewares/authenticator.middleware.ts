import { Request, Response, NextFunction } from 'express';
import Authenticator from '../config/authenticator';
import HttpError from '../models/http-error.model';

export function authenticator(req: Request, res: Response, next: NextFunction): void {

    try {

        const bearer = req.headers.authorization || '';

        if (!bearer) {
            throw new Error('Authorization not found');
        }

        const validator = new Authenticator(bearer);

        if (!validator.valid) {

            throw new Error('Invalid user provided');

        }

        next();

    } catch (error) {

        next(new HttpError(401, 'Auth failed', error.message));

    }

}

export default authenticator;
