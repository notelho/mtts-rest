// handler: (err: any, req: Request, res: Response, next: NextFunction) => {

//     if (err.name === 'UnauthorizedError') {
//         return res
//             .status(err.status)
//             .send({ message: err.message })
//             .end();
//     }

//     return next(err);
// },

import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";
import Logger from '../../app/logger';

export function handler(error: any, req: Request, res: Response, next: NextFunction): void {

    console.log('handler');


    Logger.debug(error)

    Logger.error(error) // { status: 404, name: 'Not Found', message: 'Not Found' 


    // res.status(error.status);

    // res.json({ error: { name: error.name, message: error.message } });

    // res

}

export default handler;