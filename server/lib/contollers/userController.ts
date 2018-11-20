import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import {IUser, UserSchema} from '../models/userModel';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import {DatabaseConfig} from "../../config/database";
import {ExtractJwt, Strategy} from "passport-jwt";
import * as passport from "passport";

const User = mongoose.model<IUser>('User', UserSchema);

export class UserController {

    public config: DatabaseConfig = new DatabaseConfig();

    public getUserById (id: Request, res: Response) {
        User.findById(id, (err, user) => {
            if (err) {
                throw err;
            }
            if (user) {
                res.json(user);
            }
        });
    }

    public getUserByEmail (req: Request, res: Response) {
        const query = {email: req.body.email};
        const password = req.body.password;
        User.findOne(query, (err, data) => {
            if(err) {
                return res.status(500).send({
                    message: 'Failed to getUserByEmail'
                });
            }
            if(!data) {
                return res.status(500).send({
                    success : false,
                    msg: 'User not found'
                });
            }
            if(data) {
                this.comparePassword(password, data, res);
            }
        });

    }

    public getMatchingUsers (req: Request, res: Response) {
        User.find({"skill": new RegExp(req.body.skillInput, "i"),
                    "city": new RegExp(req.body.whereInput, "i")},
            (err, users) => {
            if(err){
                return res.status(500).send(err);
            }
            if (!users) {
                    return res.json({success: false, msg: 'User not found'});
            }
            else {
                return res.status(200).json({
                    success: true,
                    documents: users
                });
            }
        });
    }

    public addUser (newUser: any, res: Response) {
        bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err, hash) => {
               if (err) {
                   res.json({success: false, msg: 'Failed to register user: ' + err});
               } else {
                   newUser.password = hash;
                   let saveUser = new User({
                       email: newUser.email,
                       firstName: newUser.firstName,
                       lastName: newUser.lastName,
                       password: newUser.password,
                       experience: "",
                       skill: newUser.skill,
                       volunteer: "",
                       city: newUser.city,
                       region: newUser.region,
                       description: "",
                       certificates: "",
                       awards: ""
                   });
                   saveUser.save((err, prod) => {
                       if(err){
                           return res.status(500).send({success: false, msg: 'Failed to save: ' + err});
                       }
                       if(prod) {
                           res.status(200).send({success: true, msg: 'User Registered'})
                       }
                   });
               }
           });
        });
    }

    public comparePassword (candidatePassword: any, user: any, res: Response) {
        let hash = user.password;
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err) {
                return res.status(500).send({
                    message: 'Failed to comparePassword'
                });
            }
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
                res.status(200).json({
                    success: true,
                    token:"JWT " + token,
                    user: {
                        _id: user._id,
                        email: user.email
                    }
                });
            } else {
                return res.status(401).json({success: false, msg: 'Wrong Password'});
            }
        });
    }

    public updateUser (req: Request, res: Response){
        User.findById(req.body._id, (err, oldUser:any) => {
            if(err) {
                throw res.status(500).send(err);
            }
            if(oldUser) {
                oldUser.firstName = req.body.firstName;
                oldUser.lastName = req.body.lastName;
                oldUser.skill = req.body.skill;
                oldUser.volunteer = req.body.volunteer;
                oldUser.experience = req.body.experience;
                oldUser.city = req.body.city;
                oldUser.region = req.body.region;
                oldUser.description = req.body.description;
                oldUser.certificates = req.body.certificates;
                oldUser.awards = req.body.awards;
                oldUser.save(res, (err, user) => {
                    if(err) {
                        throw res.status(500).send(err);
                    }
                    if(user){
                        res.status(200).json({
                            user:user
                        });
                    }
                });
            }
        });
    }

    public initialize = () => {
        passport.use("jwt", this.getStrategy());
        return passport.initialize();
    };

    public authenticate = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);


    private getStrategy = (): Strategy => {
        const params = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
            secretOrKey: this.config.secret
        };

        return new Strategy(params, (req, payload: any, done) => {
           this.getUserById(req, done);
        });
    }
}