import nodemailer from 'nodemailer';
import {status, users} from "../../router.js";
import {email, ePassword as password} from "../../../config.js";

export const send = async (req, res) => {

    const user = req.headers.email;
    if(!user) status.badRequest(res, 'Email not provided');

    const code = await users.generateVerificationCode(user);
    if(code.state === false) status.notFound(res);

    const transporter = nodemailer.createTransport( {
        service: "hotmail",
        auth: {
            user: email,
            pass: password
        }
    });

    const options = {
        from: email,
        to: user,
        subject: "Email Verification",
        text: `Here is your verification code ${code.code}`
    };

    transporter.sendMail(options, function(err, info) {

        if(err) {

            console.error(err);
            return status.notFound(res);

        }

        console.log(info.response);
        return status.ok(res);

    });

}