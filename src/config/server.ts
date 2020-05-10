import express from 'express';
import Environment from './environment';
import Configurator from './configurator';
import logger from '../helpers/logger.helper';

export class Server {

    private _app: express.Application;

    constructor() {
        this._app = express();
    }

    public start(): void {

        const app = this._app;

        const port = Environment.api.port;
        const prefix = Environment.api.prefix;

        const configurator = new Configurator();

        configurator.run(app, prefix);
        configurator.listen(app, port);

    }

    public info(): void {

        const port = Environment.api.port;
        const prefix = Environment.api.prefix;

        logger.info(`# Running on ${prefix}, port ${port}`);

    }

}

export default Server;
