import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error.model';

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction): void {

    next(new HttpError(error.status || 500, 'Fatal Error', error.message || 'Fatal Error'));

}

export default errorHandler;