"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel_1 = require("../models/userModel");
const User = mongoose.model('User', userModel_1.UserSchema);
class UserController {
    getUserById(id, res) {
        User.findById(id, res);
    }
    getUserByEmail(email, res) {
        const query = { email: email };
        User.findOne(query, res);
    }
    getMatchingUsers(req, res) {
        User.find({ "skill": new RegExp(req.body.skillInput, "i"),
            "city": new RegExp(req.body.whereInput, "i") }, res);
    }
    addUser(newUser, res) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err)
                    throw err;
                newUser.password = hash;
                newUser.save(res);
            });
        });
    }
    comparePassword(candidatePassword, hash, res) {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err)
                throw err;
            res(null, isMatch);
        });
    }
    updateUser(req, res) {
        User.findById(req.body._id, (err, oldUser) => {
            if (err)
                throw err;
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
                oldUser.save(res);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map