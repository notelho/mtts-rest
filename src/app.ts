import express from 'express';



const serve = (): void => {

  const app = express();

  configurate(app);

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

serve();
