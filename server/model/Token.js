import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({

    token: String,
    id: String,
    author: String,
    permissions: String

});

const TokenSchema = mongoose.model('Token', tokenSchema);
export default TokenSchema;