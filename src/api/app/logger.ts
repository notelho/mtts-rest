import winston from 'winston';
import Environment from './environment';

export namespace Logger {

  export function info(msg: any): void {
    Instance.info(msg);
  }

  export function debug(msg: any): void {
    Instance.debug(msg);
  }

  export function warn(msg: any): void {
    Instance.warn(msg);
  }

  export function error(msg: any): void {
    Instance.error(msg);
  }

  export function log(msg: any): void {
    Instance.silly(msg);
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