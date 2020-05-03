import winston from 'winston';
import Environment from './environment';

export namespace Logger {

  export function info(message: any): void {
    Instance.info(message);
  }

  export function debug(message: any): void {
    Instance.debug(message);
  }

  export function warn(message: any): void {
    Instance.warn(message);
  }

  export function error(message: any): void {
    Instance.error(message);
  }

  export function log(message: any): void {
    Instance.silly(message);
  }

  export type LoggerType = 'info' | 'debug' | 'warn' | 'error' | 'log';

  export const Instance = (function () {

    const formater = winston.format.combine(winston.format.cli(), winston.format.splat());

    const devConsole = new winston.transports.Console({ format: formater });
    const prodConsole = new winston.transports.Console();

    return winston.createLogger({

      level: Environment.log.level,
      levels: winston.config.npm.levels,

      transports: Environment.env === 'development' ?
        [devConsole] :
        [prodConsole],

      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      ),

    });

  })();

}

export default Logger;