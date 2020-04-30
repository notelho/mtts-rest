import expressLoader from './express';
import Logger from './logger';

import { Application } from 'express';

const loader = (app: Application) => {
  expressLoader(app);
  Logger.info('✌️ Express loaded');
};

export default loader;
