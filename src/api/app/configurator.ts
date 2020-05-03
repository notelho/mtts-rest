import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './logger';
import Router from './router';
import errors from '../middlwares/errors';

export namespace Configurator {

  export function run(app: Application, prefix: string): void {

    app.enable('trust proxy');
    app.use(cors({ allowedHeaders: '*' }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // app.use(express.static(path.join(__dirname, 'public')));

    app.use(prefix, Router.router());

    app.use(errors.notfound);
    app.use(errors.handler);
    app.use(errors.default);


    // if(!isProduction) {  
    //   app.use(errorHandler());
    // }


    // const jwt = require('jsonwebtoken');

    // module.exports = (req, res, next) => {
    //   try {
    //     const token = req.headers.authorization.split(' ')[1];
    //     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //     const userId = decodedToken.userId;
    //     if (req.body.userId && req.body.userId !== userId) {
    //       throw 'Invalid user ID';
    //     } else {
    //       next();
    //     }
    //   } catch {
    //     res.status(401).json({
    //       error: new Error('Invalid request!')
    //     });
    //   }
    // };

    // https://stackoverflow.com/questions/34117754/middleware-that-run-before-any-routes
    // https://expressjs.com/en/guide/using-middleware.html

  }

  export function listen(app: Application, port: number) {
    app.listen(port, (err: any) => {
      if (err) {
        Logger.error(err);
        process.exit(1);
      }
      Logger.info(`# Running on port ${port}`);
    });
  }

}

export default Configurator;