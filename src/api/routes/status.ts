import { Router, Request, Response } from 'express';
import StatusService from '../../services/status.service';

export function route(globalRouter: Router) {

    const status = new StatusService();
    const router = Router();

    router.all(['/', '/ok'], async (req: Request, res: Response) => {
        res.status(status.ok).end();
    });

    router.all('/error', async (req: Request, res: Response) => {
        res.status(status.error).send({ error: '/error/' }).end();
    });

    router.all('/info', async (req: Request, res: Response) => {
        res.json({ ok: status.ok, error: status.error }).status(200).end();
    });

    globalRouter.use('/status', router);

}

export default route;