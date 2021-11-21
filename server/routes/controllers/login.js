import User from "../../model/User.js";
import compare from "../../util/compare.js";
import { status } from "../router.js";

export const login = async (req, res) => {

    const data = req.body;
    if(!data.email && !data.password || !data.email || !data.password) return status.badRequest(res);

    if(req.headers.token !== '123' || !req.headers.token) return status.unauthorized(res);

    User.findOne({

        email: data.email

    }, (err, user) => {

        if(err) throw err;

        if(!user) return res.json({
            message: 'User not found',
            status: 404
        });

        let checkCredentials = compare(data.password, user.password);
        checkCredentials.then(function(result) {

            if(result === false) {

                return status.badRequest(res, 'Invalid credentials');

            } else { status.ok(res) }

        })

    })

}