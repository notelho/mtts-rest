import { Request, Response, NextFunction } from 'express';
import Environment from '../../app/environment';
import Logger from '../../app/logger';

export function sniffer(req: Request, res: Response, next: NextFunction): void {

    if (Environment.log.request) {

        const requestStart = Date.now();

        Logger.info(`# body: ${JSON.stringify(req.body)}`);
        Logger.info(`# query: ${JSON.stringify(req.query)}`);
        Logger.info(`# params: ${JSON.stringify(req.params)}`);

        res.on("error", error => Logger.error(error));

        res.on("data", () => {
            Logger.log({
                address: req.socket.remoteAddress,
                family: req.socket.remoteFamily,
                headers: req.rawHeaders,
                version: req.httpVersion,
                method: req.method,
                url: req.url,
            });
        });

        res.on("finish", () => {
            const requestEnd = Date.now();
            const processingTime = requestEnd - requestStart;
            Logger.log({ requestStart, requestEnd, processingTime });
        });

    }

    next();

}

export default sniffer;