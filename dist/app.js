"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
const bodyParser = require("body-parser");
const users_1 = require("./routes/users");
const mongoose = require("mongoose");
const cors = require("cors");
const userController_1 = require("./contollers/userController");
const path = require("path");
const passport = require("passport");
require('./config/passport');
class App {
    constructor() {
        this.userController = new userController_1.UserController();
        this.routePrv = new users_1.Routes();
        this.mongoUrl = 'mongodb://fencol:a1b2c3@ds115352.mlab.com:15352/authapp';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        // this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, '/public')));
        this.app.use(cors());
        // this.app.use(this.userController.initialize());
        this.app.use(passport.initialize());
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map