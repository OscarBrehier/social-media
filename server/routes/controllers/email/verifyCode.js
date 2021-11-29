import {users, status} from "../../router.js";

export const verifyCode = async (req, res) => {

    const token = req.body.token;
    const code = req.body.code;

    users.validateCode(token, code).then(result => {

        if(result.state === false) return status.notFound(res);
        status.ok(res, 'Email successfully verified');

    })

}