"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel_1 = require("../models/userModel");
const jwt = require("jsonwebtoken");
const database_1 = require("../../config/database");
const passport_jwt_1 = require("passport-jwt");
const passport = require("passport");
const User = mongoose.model('User', userModel_1.UserSchema);
class UserController {
    constructor() {
        this.config = new database_1.DatabaseConfig();
        this.initialize = () => {
            passport.use("jwt", this.getStrategy());
            return passport.initialize();
        };
        this.authenticate = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);
        this.getStrategy = () => {
            const params = {
                jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
                secretOrKey: this.config.secret
            };
            return new passport_jwt_1.Strategy(params, (req, payload, done) => {
                this.getUserById(req, done);
            });
        };
    }
    getUserById(id, res) {
        User.findById(id, (err, user) => {
            if (err) {
                throw err;
            }
            if (user) {
                res.json(user);
            }
        });
    }
    getUserByEmail(req, res) {
        const query = { email: req.body.email };
        const password = req.body.password;
        User.findOne(query, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: 'Failed to getUserByEmail'
                });
            }
            if (!data) {
                return res.status(500).send({
                    success: false,
                    msg: 'User not found'
                });
            }
            if (data) {
                this.comparePassword(password, data, res);
            }
        });
    }
    getMatchingUsers(req, res) {
        User.find({ "skill": new RegExp(req.body.skillInput, "i"),
            "city": new RegExp(req.body.whereInput, "i") }, (err, users) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (!users) {
                return res.json({ success: false, msg: 'User not found' });
            }
            else {
                return res.status(200).json({
                    success: true,
                    documents: users
                });
            }
        });
    }
    addUser(newUser, res) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    res.json({ success: false, msg: 'Failed to register user: ' + err });
                }
                else {
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
                        if (err) {
                            return res.status(500).send({ success: false, msg: 'Failed to save: ' + err });
                        }
                        if (prod) {
                            res.status(200).send({ success: true, msg: 'User Registered' });
                        }
                    });
                }
            });
        });
    }
    comparePassword(candidatePassword, user, res) {
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
                    token: "JWT " + token,
                    user: {
                        _id: user._id,
                        email: user.email
                    }
                });
            }
            else {
                return res.status(401).json({ success: false, msg: 'Wrong Password' });
            }
        });
    }
    updateUser(req, res) {
        User.findById(req.body._id, (err, oldUser) => {
            if (err) {
                throw res.status(500).send(err);
            }
            if (oldUser) {
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
                    if (err) {
                        throw res.status(500).send(err);
                    }
                    if (user) {
                        res.status(200).json({
                            user: user
                        });
                    }
                });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map