import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './logger';
import Router from './router';
// import errors from '../middlwares/errors';

export namespace Configurator {

  export function run(app: express.Application, prefix: string): void {

    app.enable('trust proxy');
    app.use(cors({ allowedHeaders: '*' }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static('public'));

    app.use(prefix, Router.router());

    // app.use(errors.notfound);
    // app.use(errors.handler);
    // app.use(errors.default);

  }

  export function listen(app: express.Application, port: number): void {
    app.listen(port, (error?: any) => handler(error));
  }

  export function handler(error?: any): void | never {
    if (error) {
      Logger.error(error);
      Logger.error('# An error happened,');
      Logger.error('# process will exit now');
      process.exit(1);
    }
  }

}

export default Configurator;