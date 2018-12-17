// /lib/routes/users.ts
import {Request, Response} from 'express';
import { UserController } from "../contollers/userController";
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import {DatabaseConfig} from "../../config/database";
import * as path from "path";

export class Routes {
    public userController: UserController = new UserController();
    public config: DatabaseConfig = new DatabaseConfig();

    public routes(app): void {

        app.get('/', (req, res) => {
            res.send('Invalid Endpoint');
        });

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });

        app.route('/users/register')
            .post((req: Request, res: Response) => {
            this.userController.addUser(req.body, res);
        });

        app.route('/users/postjob')
            .post((req: Request, res: Response) => {
                this.userController.addJobPost(req.body, res);
            });

        app.route('/users/authenticate')
            .post((req: Request, res: Response) => {
                this.userController.getUserByEmail(req, res);
            });

        app.route('/users/profile')
            .get(passport.authenticate('jwt', { session: false }), (req, res) => {
               res.json({user: req.user});
                // console.log("hello");
                // res.json({req});
            });
                // passport.authenticate('jwt', {session: false}), (req: any, res: Response) => {
                // res.json({user: req.user});
            // });

        // app.route('/updateProfile')
        //     .put(passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => {
        //         this.userController.updateUser(req, (err, data)=>{
        //             if(err) throw err;
        //             res.json({user:data});
        //         });
        //     });
        app.route('/users/updateProfile')
            .put(passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => {
                this.userController.updateUser(req, res);
            });
        // app.route('/search')
        //     .post((req: Request, res: Response, next: NextFunction) => {
        //         this.userController.getMatchingUsers(req, (err, data) => {
        //             if (err) {
        //                 res.status(500).send(err);
        //             }
        //             if (!data) {
        //                 return res.json({success: false, msg: 'User not found'});
        //             }
        //             res.json({
        //                 success: true,
        //                 documents: data
        //             });
        //         });
        //     });

        app.route('/users/search')
            .post((req: Request, res: Response) => {
               this.userController.getMatchingUsers(req, res);
            });

        app.route('/users/searchJobs')
            .post((req: Request, res: Response) => {
                this.userController.getMatchingJobs(req, res);
            });

        app.route('/users')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
    }
}