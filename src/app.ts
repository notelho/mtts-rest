import express from 'express';
import config from './config';
import loader from './loaders';
import Logger from './loaders/logger';

const startServer = (): void => {
  const app = express();

  loader(app);

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }

    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
};

startServer();
