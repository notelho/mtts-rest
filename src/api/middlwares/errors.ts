import { Request, Response, NextFunction } from 'express';

export const errors = {

    handler: (err: any, req: Request, res: Response, next: NextFunction) => {

        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }

        return next(err);
    },

    default: (err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);
        res.json({ errors: { message: err.message } });
    },

    notfound: (req: Request, res: Response, next: NextFunction) => {
        const error: any = new Error();
        error['message'] = 'Not Found';
        error['name'] = 'Not Found';
        error['status'] = 404;
        next(error);
    }

}

export default errors;