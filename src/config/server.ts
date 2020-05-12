import express from 'express';
import environment from './environment';
import Configurator from './configurator';
import logger from '../helpers/logger.helper';

export class Server {

    private _app: express.Application;

    constructor() {
        this._app = express();
    }

    public start(): void {

        const app = this._app;

        const port = environment.api.port;
        const apiPrefix = environment.api.prefix;
        const publicPrefix = environment.api.public;

        const configurator = new Configurator();

        configurator.run(app, apiPrefix, publicPrefix);
        configurator.listen(app, port);

    }

    public info(): void {

        const port = environment.api.port;
        const apiPrefix = environment.api.prefix;

        logger.info(`# Running on ${apiPrefix}, port ${port}`);

    }

}

export default Server;
