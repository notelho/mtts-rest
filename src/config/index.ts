import dotenv from 'dotenv';

const env = dotenv.config();

if (!env) {
  throw new Error('️⚠️ ️️.env file not found ⚠️');
}

let port = 3000;

if (process.env.PORT) {
  port = parseInt(process.env.PORT, 10);
}

export default {

  port,

  env: process.env.NODE_ENV || 'development',

  jwtSecret: process.env.JWT_SECRET || 'potato',

  logs: { level: process.env.LOG_LEVEL || 'silly', },

  api: { prefix: '/api', },
}
