import User from "../../model/User.js";
import hash from "../../util/hash.js";

export const register = async (req, res) => {

    const data = req.body;
    const dataLength = Object.keys(data).length;

    if(dataLength === 0) return res.sendStatus(400);
    if(!data.firstName || !data.lastName || !data.userName || !data.password || !data.email) return res.send('Bad template');

    const hashedPassword = await hash(data.password);

    User.findOne({
        userName: data.userName
    }, async (err, user) => {

        if(err) throw err;

        if(!user) {

            const newUser = await new User({
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName,
                password: hashedPassword,
                email: data.email
            });

            newUser.save()
                .then(res => console.log(res))
                .catch(e => console.log(e));

            return res.sendStatus(201);

        }

        res.json({
            message: "User already exists"
        });

    })

}