import {token, status} from "../router.js";

export const production = async (req, res) => {

    token.check(req, res).then(result => {

        if(result === true) status.ok(res);

    })

}
