
import * as express from "express";
import { Application } from "express";

import Server from "./index";

const app: Application = express();
const server: Server = new Server(app);
const port: number = 3001;

app.listen(port, "localhost", () => {
  // if (err) return err;
  console.info(`Server running on : http://localhost:${port}`);
});
