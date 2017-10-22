const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: false
    },
    skill: {
        type: String,
        required: false
    },
    volunteer: {
        type: String,
        required: false
    }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

module.exports.getMatchingUsers = function (req, callback){
    User.find({"skill": {"$regex": req.body.hpSkillInputBox}}, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.updateUser = function (req, callback){
    User.findById(req.body._id, (err, oldUser) => {
        if(err) throw err;
        if(oldUser) {
            oldUser.name = req.body.name;
            oldUser.email = req.body.email;
            oldUser.skill = req.body.skill;
            oldUser.volunteer = req.body.volunteer;
            oldUser.experience = req.body.experience;
            oldUser.save(callback);
        }
    });
}