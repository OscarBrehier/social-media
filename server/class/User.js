import User from "../model/User.js";

class UserClass {

    constructor() {}

    async generateVerificationCode(email) { //  575651

        const code = Math.floor(1000 + Math.random() * 900000);
        const user = await User.findOne({ Email: email }).catch(err => console.log(err));

        if(!user) return { state: false, code: null };

        user.updateOne({ VerificationCode: code }).catch(err => console.log(err));
        return { state: true, code: code };

    }

    async validateCode(token, code) {

        const email = await User.findOne({ Token: token }).catch(err => console.log(err));
        if(!email) return false;

        const user = await User.findOne({

            Email: email.Email,
            VerificationCode: code

        }).catch(err => console.log(err));

        if(!user) return { state: false };
        if(user.EmailVerified === true) return { state: false, message: 'User already verified'};

        user.updateOne({ EmailVerified: true }).catch(err => console.log(err));
        return { state: true };

    }

    async checkIfVerified(token) {

        const user = await User.findOne({ Token: token }).catch(err => console.log(err));

        if(user.EmailVerified === true) return true;
        return false;

    }

}

export default UserClass;