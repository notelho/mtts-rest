import { Request, Response, NextFunction } from 'express';
import environment from '../config/environment';
import logger from '../helpers/logger.helper';

export function routerListener(req: Request, res: Response, next: NextFunction): void {

    if (environment.log.listener) {

        const requestStart = Date.now();

        logger.info(`# body: ${JSON.stringify(req.body)}`);
        logger.info(`# query: ${JSON.stringify(req.query)}`);
        logger.info(`# params: ${JSON.stringify(req.params)}`);

        res.on("error", error => logger.error(error));

        res.on("finish", () => {

            const requestEnd = Date.now();
            const processingTime = requestEnd - requestStart;

            logger.log({ requestStart, requestEnd, processingTime });

            // logger.log({
            //     address: req.socket.remoteAddress,
            //     family: req.socket.remoteFamily,
            //     headers: req.rawHeaders,
            //     version: req.httpVersion,
            //     method: req.method,
            //     url: req.url,
            // });

        });

    }

    next();

}

export default routerListener;
