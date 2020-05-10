import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './logger';
import Router from './router';
import * as middlewares from '../middlewares';

export namespace Configurator {

  export function run(app: express.Application, prefix: string): void {

    app.enable('trust proxy');
    app.use(cors({ allowedHeaders: '*' }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(middlewares.sniffer);

    app.use('/public', express.static('src/public'));

    app.use(prefix, Router.router());

    app.use(middlewares.handler);
    app.use(middlewares.notFound);
    app.use(middlewares.thrower);

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