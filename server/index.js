import Server from "./class/Server.js";
import Database from "./class/Database.js";

import router from "./routes/router.js";
import { username, password } from "./config.js";

new Server( '4000', router).start();
new Database(username, password).start();