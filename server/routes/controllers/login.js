import User from "../../model/User.js";
import compare from "../../util/compare.js";

export const login = async (req, res) => {

    const data = req.body;
    if(!data.username && !data.password || !data.username || !data.password) return res.sendStatus(400);

    User.findOne({

        userName: data.username

    }, (err, user) => {

        if(err) throw err;

        if(!user) return res.json({
            message: 'User not found'
        });

        let checkCredentials = compare(data.password, user.password);
        checkCredentials.then(function(result) {

            console.log(result);

            if(result === false) {

                return res.json({
                    message: "Invalid credentials"
                }).sendStatus(404);

            } else {

                return res.sendStatus(200);

            }

        })

    })

}