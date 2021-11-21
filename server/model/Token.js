import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({

    token: String,
    id: String,
    author: String,
    permissions: String

});

const Token = mongoose.model('Token', tokenSchema);
export default Token;