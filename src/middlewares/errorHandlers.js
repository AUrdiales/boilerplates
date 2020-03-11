import { clientError, notFoundError, serverError } from '../utils';

function handle404Error(router) {
    router.use(() => {
        notFoundError();
    });
}

function handleClientError(router) {
    router.use((err, request, response, next) => {
        clientError(err, response, next);
    });
}

function handleServerError(router) {
    router.use((err, request, response) => {
        serverError(err, response);
    });
}

export default [handle404Error, handleClientError, handleServerError];
