import mongoose from 'mongoose';
import e from '../class/Error.js';

class Database {

    constructor(username, password) {

        this.username = username;
        this.password = password;

        // if(!uri) new e('NO_MONGO_URI', 'Invalid connection string. Missing MongoDB database URI.');
        if(!username || !password) new e('NO_MONGO_USERNAME', 'URI container wrong or emptry userinfo section.');

    }

    start() {

        const uri = `mongodb+srv://${this.username}:${this.password}@cluster01.by2xl.mongodb.net/social-media`;
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const connection = mongoose.connection;

        mongoose.connect(uri, options);

        connection.on('connected', () => {
            console.log(`Database: connected`);
        });

        connection.on('disconnected', () => {
            console.log(`Database: disconnected`);
        });

        connection.on('error', (error) => {
            console.log(`Database: error \n${error.stack}`);
        });

    }

}

export default Database;