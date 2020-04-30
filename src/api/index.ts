import requireDir from 'require-dir';
import * as express from 'express';
import * as path from 'path';

export function index() {

  const app = express.Router();
  const routePath = path.join(__dirname, './routes');
  const routeDirectory = requireDir(routePath);
  const routeKeys = Object.keys(routeDirectory);
  const routes = routeKeys.map(key => routeDirectory[key]);

  routes.forEach(route => {
    route.default(app);
  });

  return app;
}

export default index;