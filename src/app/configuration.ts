import bodyParser from 'body-parser';
import cors from 'cors';

import notfound from '../api/middlwares/noutfound';
import errors from '../api/middlwares/errors';

import config from './configuration';

import routes from '../api';


import { Application } from 'express';

export default (app: Application) => {

  /*
   * Default
   */
  app.use(cors({ allowedHeaders: '*' }));
  app.enable('trust proxy');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  /*
   * Routes
   */
  app.use(config.api.prefix, routes());

  /*
   * Middlewares
   */
  app.use(notfound);
  app.use(errors.handler);
  app.use(errors.default);

};