import Environment from './environment';
import winston from 'winston';
import path from 'path';

export namespace Logger {

  export type LoggerType = 'info' | 'debug' | 'warn' | 'error' | 'silly';

  export function info(message: any): void {
    Instance.info(stringfy(message));
  }

  export function debug(message: any): void {
    Instance.debug(stringfy(message));
  }

  export function warn(message: any): void {
    Instance.warn(stringfy(message));
  }

  export function error(message: any): void {
    Instance.error(stringfy(message));
  }

  export function log(message: any): void {
    Instance.silly(stringfy(message));
  }

  export function stringfy(message: any) {
    if (typeof message !== 'string') {
      return JSON.stringify(message);
    }
    return message as string;
  }

  export const Instance = (function () {

    const formater = winston.format.combine(
      winston.format.cli(),
      winston.format.json(),
      winston.format.splat(),
      winston.format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`),
    );

    const devConsole = new winston.transports.Console({ format: formater });
    const prodConsole = new winston.transports.Console();

    const getFileName = function () {
      if (process.mainModule) {
        return path.basename(process.mainModule.filename);
      }
      return 'null';
    };

    return winston.createLogger({

      level: Environment.log.level,
      levels: winston.config.npm.levels,

      // exitOnError: false,

      transports: Environment.env === 'development' ?
        [devConsole] :
        [prodConsole],

      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
        winston.format.label({ label: getFileName() }),
        winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
      ),

    });

  })();

}

export default Logger;