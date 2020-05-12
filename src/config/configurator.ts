import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Router from '../router/router';
import logger from '../helpers/logger.helper';
import authenticator from '../middlewares/authenticator.middleware';
import routerListener from '../middlewares/router-listener.middleware';
import errorHandler from '../middlewares/error-handler.middleware';
import errorNotFound from '../middlewares/error-notfound.middleware';
import errorThrower from '../middlewares/error-thrower.middleware';

export class Configurator {

    public run(app: express.Application, apiPrefix: string, publicPrefix: string): void {
        app.enable('trust proxy');
        app.use(cors({ allowedHeaders: '*' }));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(routerListener);
        app.use(authenticator);
        app.use(publicPrefix, express.static('src/public'));
        app.use(apiPrefix, new Router().routes);
        app.use(errorHandler);
        app.use(errorNotFound);
        app.use(errorThrower);
    }

    public listen(app: express.Application, port: number): void {
        app.listen(port, (error?: any) => {
            if (error) {
                this.handler(error);
            }
        });
    }

    public handler(error: any): never {
        logger.error(error);
        logger.error('# An error happened,');
        logger.error('# process will exit now');
        process.exit(1);
    }

}

export default Configurator;
