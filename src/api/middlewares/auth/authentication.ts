import { Request, Response, NextFunction } from 'express';
import HttpErrorType from "../../../types/http-error.type";
import Authenticator from '../../app/authenticator';

export function authentication(req: Request, res: Response, next: NextFunction): void {

  try {

    const bearer = req.headers.authorization || '';

    const token = Authenticator.getToken(bearer);

    const isValid = Authenticator.isValid(token);

    if (!isValid) {
      throw new Error('Invalid token');
    }

    next();

  } catch (error) {

    next({ status: 401, name: 'Auth failed', message: error.message } as HttpErrorType);

  }

}

export default authentication;