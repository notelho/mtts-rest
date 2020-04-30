import bodyParser from 'body-parser';
import config from '../config';
import cors from 'cors';
import routes from '../api';
import notfound from '../api/middlwares/noutfound';
import errors from '../api/middlwares/errors';

import { Application } from 'express';

export default (app: Application) => {

  app.get('/status', (req, res) => res.status(200).end())
  app.head('/status', (req, res) => res.status(200).end())

  // default
  app.use(cors({ allowedHeaders: '*' }))
  app.enable('trust proxy')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  //routes
  app.use(config.api.prefix, routes())

  //middlewares
  app.use(notfound)
  app.use(errors.handler)
  app.use(errors.default)
};
