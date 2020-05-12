import dotenv from 'dotenv';

export const environment = new (class Environment {

    public readonly env: string;

    public readonly jwt: { secret: string };

    public readonly log: { level: string, listener: boolean };

    public readonly api: { port: number, prefix: string, public: string };

    constructor() {

        dotenv.config();

        this.env = process.env.NODE_ENV || 'development';

        this.jwt = { secret: process.env.JWT_SECRET || 'supersecretapikey' };

        this.log = {

            level: process.env.LOG_LEVEL || 'silly',

            listener: (process.env.LOG_LISTENER === 'true') || false,

        };

        this.api = {

            port: process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 3000,

            prefix: process.env.API_PREFIX || '/api',

            public: process.env.API_PUBLIC || '/public',

        };

    }

})();

export default environment;
