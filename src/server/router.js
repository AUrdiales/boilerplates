import { Router } from 'express';
import errorHandlers from '../middlewares/errorHandlers';
import middlewares from '../middlewares';
import { applyMiddleware, applyRoutes } from '../utils';

export async function setRouter() {
    const router = Router();
    applyMiddleware(middlewares, router);
    await applyRoutes(router);
    applyMiddleware(errorHandlers, router);

    return router;
}
