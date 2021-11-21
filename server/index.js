import Server from "./class/Server.js";
import Database from "./class/Database.js";

import router from "./routes/router.js";
import { username, password } from "./config.js";

console.clear();
const client = new Server( '4000', router);
new Database(username, password).start();

client.start();
export default client;