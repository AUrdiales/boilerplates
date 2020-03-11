import { HTTPClientError, HTTP404Error } from './httpError';

export function notFoundError() {
    throw new HTTP404Error('url not found');
}

export function clientError(err, response, next) {
    if (err instanceof HTTPClientError) {
        console.error(err);
        response.status(err.statusCode).send(err.message);
    } else {
        next(err);
    }
}

export function serverError(err, response) {
    console.error(err);
    if (process.env.NODE_ENV === 'production') {
        response.status(500).send('Internal Server Error');
    } else {
        response.status(500).send(err.stack);
    }
}
