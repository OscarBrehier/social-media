import User from "../../../model/User.js";
import {status} from "../../router.js";
import moment from "moment";

export const user = async (req, res) => {

    let token = req.headers.token;
    if(!token) status.badRequest(res);

   const getUser = await User.findOne({

        Token: token

   }).catch(err => console.log(err));

   if(!getUser) return status.notFound(res, 'User not found');

   res.status(200).json({
       FirstName: getUser.FirstName,
       LastName: getUser.LastName,
       Username: getUser.Username,
       Email: getUser.Email,
       JoinedOn: moment(getUser.JoinedOn).format('Do MMMM YYYY'),
       status: 200
   });

}