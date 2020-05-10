import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error.model';

export function errorThrower(error: HttpError, req: Request, res: Response, next: NextFunction): void {

    return res.status(error.status).send({ status: error.status, error: error.message }).end();

}

export default errorThrower;