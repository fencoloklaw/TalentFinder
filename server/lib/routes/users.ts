// /lib/routes/users.ts
import {Request, Response, NextFunction} from 'express';
import { UserSchema } from '../models/userModel';
import { UserController } from "../contollers/userController";
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import {DatabaseConfig} from "../../config/database";

export class Routes {
    public userController: UserController = new UserController();
    public config: DatabaseConfig = new DatabaseConfig();

    public routes(app): void {

        app.route('/register')
            .post((req: Request, res: Response) => {
            let newUser = new UserSchema({
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                experience: "",
                skill: req.body.skill,
                volunteer: "",
                city: req.body.city,
                region: req.body.region,
                description: "",
                certificates: "",
                awards: ""
            });
            this.userController.addUser(newUser, (err) => {
                if (err) {
                    res.json({success: false, msg: 'Failed to register user: ' + err});
                } else {
                    res.json({success: true, msg: 'User Registered'});
                }
            });
        });

        app.route('/authenticate')
            .post((req: Request, res: Response) => {
                const email = req.body.email;
                const password = req.body.password;
                this.userController.getUserByEmail(email, (err, user) => {
                    if (err) throw err;
                    if(!user) {
                        return res.json({success: false, msg: 'User not found'});
                    }
                    this.userController.comparePassword(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            let header = {
                                expiresIn: '7d'
                            };

                            let payload = {
                                user: {
                                    _id: user._id,
                                    email: user.email
                                }
                            };
                            const token = jwt.sign(payload, this.config.secret, header);
                            res.json({
                                success: true,
                                token:"JWT " + token,
                                user: {
                                    _id: user._id,
                                    email: user.email
                                }
                            });
                        } else {
                            return res.json({success: false, msg: 'Wrong Password'});
                        }
                    });
                });
            });

        app.route('/profile')
            .get(passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => {
                res.json({user: req.user});
            });

        app.route('/updateProfile')
            .put(passport.authenticate('jwt', {session: false}), (req: Request, res: Response) => {
                this.userController.updateUser(req, (err, data)=>{
                    if(err) throw err;
                    res.json({user:data});
                });
            });

        app.route('/search')
            .post((req: Request, res: Response, next: NextFunction) => {
                this.userController.getMatchingUsers(req, (err, data) => {
                    if (err) throw err;
                    if (!data) {
                        return res.json({success: false, msg: 'User not found'});
                    }
                    res.json({
                        success: true,
                        documents: data
                    });
                });
            });



        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // // Contact
        // app.route('/contact')
        // // GET endpoint
        //     .get((req: Request, res: Response) => {
        //         // Get all contacts
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     })
        //     // POST endpoint
        //     .post((req: Request, res: Response) => {
        //         // Create new contact
        //         res.status(200).send({
        //             message: 'POST request successfulll!!!!'
        //         })
        //     })
        //
        // // Contact detail
        // app.route('/contact/:contactId')
        // // get specific contact
        //     .get((req: Request, res: Response) => {
        //         // Get a single contact detail
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     })
        //     .put((req: Request, res: Response) => {
        //         // Update a contact
        //         res.status(200).send({
        //             message: 'PUT request successfulll!!!!'
        //         })
        //     })
        //     .delete((req: Request, res: Response) => {
        //         // Delete a contact
        //         res.status(200).send({
        //             message: 'DELETE request successfulll!!!!'
        //         })
        //     })
    }
}