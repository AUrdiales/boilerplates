import { createServer } from 'http';
import { server } from './server/server';
import { log } from 'util';

const { PORT = 3000 } = process.env;

(async () => {
    const httpServer = createServer(await server());
    httpServer.listen(PORT, () => {
        log(`Server started on port: ${PORT}`);
    });
})();
