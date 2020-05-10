import Environment from '../config/environment';
import winston from 'winston';
import path from 'path';

export const logger = new (class Logger {

    readonly types: string[] = ['info', 'debug', 'warn', 'error', 'silly'];

    readonly instance: winston.Logger;

    constructor() {

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

        this.instance = winston.createLogger({

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

    }

    public info(message: any): void {
        this.instance.info(this.stringfy(message));
    }

    public debug(message: any): void {
        this.instance.debug(this.stringfy(message));
    }

    public warn(message: any): void {
        this.instance.warn(this.stringfy(message));
    }

    public error(message: any): void {
        this.instance.error(this.stringfy(message));
    }

    public log(message: any): void {
        this.instance.silly(this.stringfy(message));
    }

    public stringfy(message: any) {
        if (typeof message !== 'string') {
            return JSON.stringify(message);
        }
        return message as string;
    }

})();

export default logger;
