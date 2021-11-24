import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    token: String,
    id: String,

});

const User = mongoose.model('User', userSchema);
export default User;