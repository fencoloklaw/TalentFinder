// /lib/routes/users.ts
import {Request, Response} from 'express';
import { UserController } from "../contollers/userController";
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import {DatabaseConfig} from "../config/database";
import * as path from "path";
import {upload} from "../models/storageModel";

export class Routes {
    public userController: UserController = new UserController();
    public config: DatabaseConfig = new DatabaseConfig();

    public routes(app): void {
        app.route('/users/register')
            .post((req: Request, res: Response) => {
            this.userController.addUser(req.body, res);
        });

        app.route('/users/postjob')
            .post((req: Request, res: Response) => {
                this.userController.addJobPost(req.body, res);
            });

        app.route('/users/upload')
            .post(upload.single('myFile'), async(req, res) => {
                if (req.file){
                    this.userController.updateUserAvatar(req, req.file.filename, res);
                }
                else{
                    return res.status(500).send(res);
                }
            });

        app.route('/users/authenticate')
            .post((req: Request, res: Response) => {
                this.userController.getUserByEmail(req, res);
            });

        app.route('/users/profile')
            .get(passport.authenticate('jwt', { session: false }), (req, res) => {
               res.json({user: req.user});
            });

        app.route('/users/updateProfile')
            .put(passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => {
                this.userController.updateUser(req, res);
            });

        app.route('/users/search')
            .post((req: Request, res: Response) => {
               this.userController.getMatchingUsers(req, res);
            });

        app.route('/users/searchJobs')
            .post((req: Request, res: Response) => {
                this.userController.getMatchingJobs(req, res);
            });

        app.route('/users/recommendations')
            .post((req: Request, res: Response) => {
                this.userController.getRecommendedResults(req, res);
            });

        app.get('/', (req, res) => {
            res.send('Invalid Endpoint');
        });

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
    }
}