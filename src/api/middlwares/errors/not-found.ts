import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";

export function notFound(req: Request, res: Response, next: NextFunction): void {

    console.log('nout found?');


    next({ status: 404, name: 'Not Found', message: 'Not Found' } as HttpErrorType);

}

export default notFound;