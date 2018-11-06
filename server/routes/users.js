const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//APIS

//Register
router.post('/register', (req, res) => {
    let newUser = new User({
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

    User.addUser(newUser, (err) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register user: ' + err});
        } else {
            res.json({success: true, msg: 'User Registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                header = {
                    expiresIn: '7d'
                };

                payload = {
                    user: {
                        _id: user._id,
                        email: user.email
                    }
                };
                const token = jwt.sign(payload, config.secret, header);
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

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({user: req.user});
});

//Update Profile
router.put('/updateProfile', passport.authenticate('jwt', {session: false}), (req, res) => {
    User.updateUser(req, (err, data)=>{
        if(err) throw err;
        res.json({user: data});
    });
});

//SearchRes
router.post('/search', (req, res, next) => {
    User.getMatchingUsers(req, (err, data) => {
        if (err) throw err;
        if (!data) {
            return res.json({success: false, msg: 'User not found'});
        }
        res.json({
            success: true,
            documents: data
        });
    });
    // res.send(username);
});

module.exports = router;