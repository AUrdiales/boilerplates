import { log } from 'util';
import express from 'express';

import { setRouter } from './router';

process.on('uncaughtException', error => {
    log(error);
    process.exit(1);
});

process.on('unhandledRejection', error => {
    log(error);
    process.exit(1);
});

export async function server() {
    const app = express();
    const router = await setRouter();
    app.use(router);
    log('starting setup...');

    return app;
}
