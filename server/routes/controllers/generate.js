import Token from "../../model/Token.js";
import hash from "../../util/hash.js";
import uniqid from 'uniqid';
import {status} from "../router.js";

export const generate = async (req, res) => {

    const id = uniqid();
    const name = req.body.author;
    const permissions = req.body.permissions;

    if(!name) return status.badRequest(res, 'Missing token author');

    hash(`${id}${name}`).then(token => {

        Token.findOne({
            author: name
        }, (err, tokens) => {

            if(err) throw err;

            if(!tokens) {

                const newToken = new Token({

                    token: token,
                    id: id,
                    author: name,
                    permissions: permissions

                });

                newToken.save()
                    .catch(err => console.error(err));

                return status.ok(res, `Your personal token is: ${token}`);

            }

            status.forbidden(res, 'Token with this author already exists');

        })

    });

}