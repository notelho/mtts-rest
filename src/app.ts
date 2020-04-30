import express from 'express';
import config from './app/configuration';
import loader from './app/loader';
import Logger from './app/logger';

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
