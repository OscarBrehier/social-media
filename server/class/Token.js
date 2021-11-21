import TokenSchema from "../model/Token.js";
import {status} from "../routes/router.js";

class Token {

    constructor() {}

    async check(req, res) {

        try {

            const token = req.headers.authorization;
            const author = req.headers.author;

            if(!token || !author) {

                status.unauthorized(res);
                return false;

            }

            const user = await TokenSchema.findOne({ author: author }).catch(err => console.error(err));

            if(!user) {

                status.notFound(res, 'No user with the given username');
                return false;

            } else if(user.token !== token) {

                status.forbidden(res, 'Tokens do not match');
                return false;

            } else {

                return true;

            }

        } catch(err) { console.error(err); }

    }

    async permissions(req, res, permission) {

        try {

            const author = req.headers.author;

            const user = await TokenSchema.findOne({ author: author }).catch(err => console.log(err));

            if(user.permissions !== permission) {

                status.forbidden(res, 'Missing permissions');
                return false;

            }

            return true;

        } catch(err) { console.error(err); }

    }

}

export default Token;