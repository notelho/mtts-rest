import express from 'express';
import Environment from './api/app/environment';
import Configurator from './api/app/configurator';

export class App {

    private _app: express.Application;

    constructor() {
        this._app = express();
    }

    public start() {

        const app = this._app;
        const port = Environment.api.port;
        const prefix = Environment.api.prefix;

        Configurator.run(app, prefix);
        Configurator.listen(app, port);

        return this;
    }

}

const app = new App().start();