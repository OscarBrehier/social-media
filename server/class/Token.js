import User from "../model/User.js";
import {status} from "../routes/router.js";
import uniqid from 'uniqid';
import hash from "../util/hash.js";

class Token {

    constructor() {}

    async generate(name) {

        const id = uniqid();
        const token = await hash(`${id}${name}`);

        return { token, id };

    }

    async check(req, res) {

        const token = req.headers.authorization;
        const author = req.headers.author;

        if(!token && !author || !token || !author) {

            status.unauthorized(res);
            return false;

        }

        const user = await User.findOne({ userName: author }).catch(err => console.error(err));

        if(!user) {

            status.notFound(res, 'A user with the given username does not exists.');
            return false;

        }

        if(token !== user.token) {

            status.forbidden(res, 'Tokens do not match.');
            return false;

        }

        return true;

    }

    async validate(req, res) {

        const token = req.body.token;

        const user = await User.findOne({ Token: token }).catch(err => console.log(err));

        if(!user) return false;
        return true;

    }

}

export default Token;