import requireDir from 'require-dir';

import { Router } from 'express';
import { join } from 'path';

/**
 * This function allows us to require all routes inside routes/ path dynamically
 */
const routes = () => {
  const routesFn = requireDir(join(__dirname, './routes'));
  const routes = Object.keys(routesFn).map(key => routesFn[key]);

  return routes;
};

export default () => {
  const app = Router();

  console.log(routes());
  
  routes().forEach(route => route.default(app));

  return app;
}