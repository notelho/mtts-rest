import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";

export function handler(error: any, req: Request, res: Response, next: NextFunction): void {

    next({ status: error.status || 500, name: 'Fatal Error', message: error.message || 'Fatal Error' } as HttpErrorType);

}

export default handler;