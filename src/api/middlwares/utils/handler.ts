// handler: (err: any, req: Request, res: Response, next: NextFunction) => {

//     if (err.name === 'UnauthorizedError') {
//         return res
//             .status(err.status)
//             .send({ message: err.message })
//             .end();
//     }

//     return next(err);
// },