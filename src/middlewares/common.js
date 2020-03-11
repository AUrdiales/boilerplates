import { urlencoded, json } from 'express';
import compression from 'compression';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../server/swagger.json';

export function handleCors(router) {
    router.use(cors());
}

export function handleParse(router) {
    router.use(urlencoded({ extended: true }));
    router.use(json());
}

export function handleCompression(router) {
    router.use(compression());
}

export function handleAPIDocs(router) {
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
