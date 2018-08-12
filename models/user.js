const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
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
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    certificates: {
        type: String,
        required: false
    },
    awards: {
        type: String,
        required: false
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

// module.exports.getUserByUsername = function (username, callback) {
//     const query = {username: username};
//     User.findOne(query, callback);
// };

module.exports.getUserByEmail = function (email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
};


module.exports.getMatchingUsers = function (req, callback){
    User.find({"skill": new RegExp(req.body.skillInput, "i"),
                "city": new RegExp(req.body.whereInput, "i")},
                callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};

module.exports.updateUser = function (req, callback){
    User.findById(req.body._id, (err, oldUser) => {
        if(err) throw err;
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
            oldUser.save(callback);
        }
    });
};