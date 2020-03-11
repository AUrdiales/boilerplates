export class HTTPClientError extends Error {
    statusCode;
    name;

    constructor(message) {
        super(message);

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class HTTP400Error extends HTTPClientError {
    statusCode = 400;

    constructor(message = 'Bad Request') {
        super(message);
    }
}

export class HTTP404Error extends HTTPClientError {
    statusCode = 404;

    constructor(message = 'Not found') {
        super(message);
    }
}
