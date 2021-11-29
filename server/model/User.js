import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    FirstName: String,
    LastName: String,
    Username: String,
    Email: String,
    JoinedOn: String,
    Password: String,
    Token: String,
    ID: String,
    EmailVerified: Boolean,
    VerificationCode: String

});

const User = mongoose.model('User', userSchema);
export default User;