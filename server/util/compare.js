import bcrypt from "bcryptjs";

export default async function compare(text, hash) {

    let compare = bcrypt.compare(text, hash);
    return compare;

}