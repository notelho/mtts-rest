import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";

export function thrower(error: HttpErrorType, req: Request, res: Response, next: NextFunction): void {

    return res.status(error.status).send({ status: error.status, error: error.message }).end();

}

export default thrower;