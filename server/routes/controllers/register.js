import User from "../../model/User.js";
import hash from "../../util/hash.js";
import { status } from "../router.js";
import {token} from "../router.js";

export const register = async (req, res) => {

    const data = req.body;
    const dataLength = Object.keys(data).length;

    if(dataLength === 0) return res.sendStatus(400);
    if(!data.firstName || !data.lastName || !data.username || !data.password || !data.email) return status.badRequest(res);

    const hashedPassword = await hash(data.password);
    const generate = await token.generate(data.username);

    User.findOne({

        email: data.email

    }, async (err, user) => {

        if(err) throw err;

        if(!user) {

            const newUser = await new User({

                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.username,
                password: hashedPassword,
                email: data.email,
                token: generate.token,
                id: generate.id

            });

            newUser.save()
                .then(res => console.log(res))
                .catch(e => console.log(e));

            return status.created(res);

        }

        status.forbidden(res, 'User with this email already exists');

    });

}