import express from "express";
import cors from 'cors';
import e from '../class/Error.js';
import Token from "../model/Token.js";
import {status} from "../routes/router.js";
import hash from "../util/hash.js";
import compare from "../util/compare.js";

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

    token(req, res) {

        const token = req.headers.authorization;
        const user = req.headers.user;

        Token.findOne({ author: user}, (err, users) => {

            if(err) throw err;

            if(!user) {

                console.log('A token with this user has not been found');
                status.notFound(res);
                return false;

            }

            const hashed = hash(`${user.id}${user}`);
            const compared = compare(token)

            if(hashed !== user.token) {

                status.notFound(res, 'Invalid token for this user');
                return false;

            }

            status.ok(200);
            return true;

        })


    }

}

export default Server;