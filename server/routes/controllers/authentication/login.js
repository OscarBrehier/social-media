import User from "../../../model/User.js";
import compare from "../../../util/compare.js";
import {status} from "../../router.js";
import {token} from "../../router.js";

export const login = async (req, res) => {

    const data = req.body;
    if(!data.email && !data.password || !data.email || !data.password) return status.badRequest(res);

    User.findOne({

        Email: data.email

    }, (err, user) => {

        if(err) throw err;

        if(!user) return res.json({
            message: 'User not found',
            status: 404
        });

        let checkCredentials = compare(data.password, user.Password);
        checkCredentials.then(function(result) {

            if(result === false) {

                return status.badRequest(res, 'Invalid credentials');

            } else {

                res.status(200).json({
                    message: 'OK',
                    token: user.Token,
                    status: 200
                });

            }

        });

    });

}