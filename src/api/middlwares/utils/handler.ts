import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";

export function handler(error: Error, req: Request, res: Response, next: NextFunction): void {

    next({ status: 500, name: 'Fatal Error', message: error.message } as HttpErrorType);

}

export default handler;