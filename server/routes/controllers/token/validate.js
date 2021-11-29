import {token, status} from "../../router.js";

export const validate = async (req, res) => {

    const validate = await token.validate(req, res);

    if(validate !== true) return status.notFound(res);
    return status.ok(res);

}