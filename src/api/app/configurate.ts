import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import environment from './environment';
import router from './router';

import errors from '../middlwares/errors';

export function configurate(app: express.Application) {

  app.use(cors({ allowedHeaders: '*' }));
  app.enable('trust proxy');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(environment.api.prefix, router());

  app.use(errors.notfound);
  app.use(errors.handler);
  app.use(errors.default);

}

export default configurate;