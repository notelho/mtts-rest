import requireDir from 'require-dir';
import express from 'express';
import path from 'path';

export class Router {

    public readonly routingPath: string;

    public readonly routingDirectory: any;

    public readonly routingNames: string[];

    constructor() {
        this.routingPath = path.join(__dirname, './routes');
        this.routingDirectory = requireDir(this.routingPath);
        this.routingNames = Object.keys(this.routingDirectory);
    }

    public get routes() {

        const routing = express.Router();

        const routes = this.routingNames.map(key => this.routingDirectory[key]);

        routes.forEach(route => {
            route.default(routing);
        });

        return routing;
    }

}

export default Router;
