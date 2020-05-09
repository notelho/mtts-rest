import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Logger from './logger';
import Router from './router';
import * as middlwares from '../middlwares';

export namespace Configurator {

  export function run(app: express.Application, prefix: string): void {

    app.enable('trust proxy');
    app.use(cors({ allowedHeaders: '*' }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static('public'));

    app.use(prefix, Router.router());

    app.use(function (err: any, req: any, res: any, next: any) {

      Logger.info(err)
      Logger.info('houasffjoiafiaof')

      res.status(400).send(err.message)

    })


    app.use(middlwares.handler);
    // app.use(middlwares.notFound);
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