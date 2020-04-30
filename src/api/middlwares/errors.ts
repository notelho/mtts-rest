import { Request, Response, NextFunction } from 'express';

export default {

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

        res.json({
            errors: {
                message: err.message,
            },
        });
    }

}