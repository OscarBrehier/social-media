import bcrypt from 'bcryptjs';

export default async function hash(text) {

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(text, salt);
    return hash;

}