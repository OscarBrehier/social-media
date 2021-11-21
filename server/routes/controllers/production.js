import {token} from "../router.js";

export const production = async (req, res) => {

    token.check(req, res).then(result => {



    })

}
