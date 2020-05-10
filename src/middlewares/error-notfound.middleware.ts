import { Request, Response, NextFunction } from 'express';
import HttpError from '../models/http-error.model';

export function errorNotFound(req: Request, res: Response, next: NextFunction): void {

    next(new HttpError(404, 'Not Found', 'Not Found'));

}

export default errorNotFound;