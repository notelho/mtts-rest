import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";
import jwt from 'jsonwebtoken';

export function authentication(req: Request, res: Response, next: NextFunction): void {

  try {

    const bearer = req.headers.authorization;

    if (!bearer) {
      throw new Error();
    }

    const token = bearer.split(' ')[1];

    const isValid = (function (token: string): boolean {

      //     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
      //     const userId = decodedToken.userId;

      return true;

    })(token);

    if (!isValid) {

      throw new Error('Invalid ')

    }


  } catch (error) {

    //     res.status(401).json({
    //       error: new Error('Invalid request!')
    //     });

  }

  // next({ status: 404, name: 'Not Found', message: 'Not Found' } as HttpErrorType);

}

export default authentication;