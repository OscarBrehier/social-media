import User from "../../../model/User.js";
import hash from "../../../util/hash.js";
import { status } from "../../router.js";
import {token} from "../../router.js";

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

                FirstName: data.firstName,
                LastName: data.lastName,
                Username: data.username,
                Email: data.email,
                JoinedOn: new Date(),
                Password: hashedPassword,
                Token: generate.token,
                ID: generate.id,
                EmailVerified: false,
                VerificationCode: null

            });

            newUser.save()
                .catch(e => console.log(e));

            return status.created(res);

        }

        status.forbidden(res, 'User with this email already exists');

    });

}