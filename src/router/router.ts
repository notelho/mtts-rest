import requireDir from 'require-dir';
import express from 'express';
import path from 'path';

export namespace Router {

    export const routingPath = path.join(__dirname, './routes');

    export const routingDirectory = requireDir(routingPath);

    export const routingNames = Object.keys(routingDirectory);

    export function router() {

        const routing = express.Router();

        const routes = routingNames.map(key => routingDirectory[key]);

        routes.forEach(route => {
            route.default(routing);
        });

        return routing;
    }

}

export default Router;
