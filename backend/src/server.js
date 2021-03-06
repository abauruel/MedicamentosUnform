const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./app/config/database");
const cors = require("cors");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";

    this.database();
    this.middleware();
    this.routes();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }
  middleware() {
    this.express.use(cors());
    this.express.use(express.json());
  }
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
