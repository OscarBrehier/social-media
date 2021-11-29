import {users, status} from "../../router.js";

export const checkVerified = async (req, res) => {

    const email = req.headers.token;

    users.checkIfVerified(email).then(result => {

       if(result === false) return status.ok(res, 'false');
       return status.ok(res, 'true');
    });

}