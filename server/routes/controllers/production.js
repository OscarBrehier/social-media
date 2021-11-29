import {status, users} from "../router.js";

export const production = async (req, res) => {

     const user = req.headers.email;
     if(!user) status.badRequest(res, 'Email not provided');

     const code = await users.generateVerificationCode(user);

     if(code.state === false) status.notFound(res);
     status.ok(res, code.code);

}
