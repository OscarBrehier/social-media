import express from "express";
import cors from 'cors';
import e from '../class/Error.js';

class Server {

    constructor(port, router) {

        if(router === undefined) new e('NO_ROUTER', 'Router field missing or invalid.');

        this.port = port || '4000';
        this.router = router;

    }

    start() {

        const app = express();

        app.use(cors());
        app.use(express.json());
        app.use('/', this.router);

        app.listen({ port: this.port}, () => {
            console.log(`Server: listening on port ${this.port}`);
        });

    }


}

export default Server;