import winston from 'winston';
import environment from './environment';

function createLogger() {

  const formater = winston.format.combine(winston.format.cli(), winston.format.splat());

  const devConsole = new winston.transports.Console({ format: formater });
  const prodConsole = new winston.transports.Console();

  return winston.createLogger({

    level: environment.logs.level,
    levels: winston.config.npm.levels,

    transports: environment.env === 'development' ?
      [devConsole] :
      [prodConsole],

    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json()
    ),

  });

}

const logger = createLogger();

export default logger;