import dotenv from 'dotenv';

dotenv.config();

export namespace Environment {

  export const env = process.env.NODE_ENV || 'development';

  export const jwt = {

    secret: process.env.JWT_SECRET || 'potato'

  };

  export const log = {

    level: process.env.LOG_LEVEL || 'silly'

  };

  export const api = {

    prefix: process.env.API_PREFIX || '/api',

    port: process.env.API_PORT ? parseInt(process.env.API_PORT) : 3000

  };

}

export default Environment;