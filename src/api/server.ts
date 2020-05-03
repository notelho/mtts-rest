import express from 'express';
import Environment from './app/environment';
import Configurator from './app/configurator';
import Logger from './app/logger';

export class Server {

    private _app: express.Application;

    constructor() {
        this._app = express();
    }

    public start(): void {

        const app = this._app;
        const port = Environment.api.port;
        const prefix = Environment.api.prefix;

        Configurator.run(app, prefix);
        Configurator.listen(app, port);

    }

    public info(): void {

        const port = Environment.api.port;
        const prefix = Environment.api.prefix;

        Logger.info(`# Running on ${prefix}, port ${port}`);

    }

}

export default Server;