import { Application } from "express";
import NameCountCtrl from "../controllers/name-countCtrl";

export default class Routes {
  NameCountCtrl = new NameCountCtrl();

  constructor(app: Application) {
    app.route("/name-count/:name").get(this.NameCountCtrl.getNameCount);
  }
}
