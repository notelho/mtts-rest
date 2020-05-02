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
    app.use(prefix, Router.router());
    app.use(errors.notfound);
    app.use(errors.handler);
    app.use(errors.default);
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