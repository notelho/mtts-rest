import { Router, Request, Response } from 'express';
import StatusService from '../../services/status.service';

export function route(router: Router): void {

    const status = new StatusService();
    const local = Router();

    local.all(['/', '/ok'], async (req: Request, res: Response) => {
        res.status(status.ok).end();
    });

    local.all('/error', async (req: Request, res: Response) => {
        res.status(status.error).send({ error: '/error/' }).end();
    });

    local.all('/info', async (req: Request, res: Response) => {
        res.json({ ok: status.ok, error: status.error }).status(200).end();
    });

    router.use('/status', local);

}

export default route;
