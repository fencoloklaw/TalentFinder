// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/users";
import * as mongoose from "mongoose";
import * as cors from "cors";
import { UserController } from "./contollers/userController";
import * as path from "path";
import * as passport from "passport";
import * as multer from "multer";

require('./config/passport');

class App {
    public userController: UserController = new UserController();
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://fencol:a1b2c3@ds115352.mlab.com:15352/authapp';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // this.app.post("/upload", multer({dest: "./uploads/"}).array("uploads", 12), function(req, res) {
        //     res.send(req);
        // });


        this.app.use(express.static(path.join(__dirname, '/public')));
        this.app.use(cors());
        this.app.use(passport.initialize());
    }

    private mongoSetup(): void {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;