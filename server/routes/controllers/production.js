import client from "../../index.js";

export const production = async (req, res) => {

    let tokenCheck = await client.token(req, res);
    console.log(tokenCheck);

}
