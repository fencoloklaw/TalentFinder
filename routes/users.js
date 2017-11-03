const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//APIS

//Register
router.post('/register', (req, res) => {
    //res.send('REGISTER');
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        experience: "",
        skill: "",
        volunteer: ""
    });

    User.addUser(newUser, (err) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res) => {
    //res.send('AUTHENTICATE');
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
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
    // let userInfo = new User({
    //     _id : req.body._id,
    //     name : req.body.name,
    //     username : req.body.username,
    //     email : req.body.email,
    //     skill : "skill",
    //     experience : req.body.experience,
    //     volunteer : req.body.volunteer
    // });
    // res.json({user: userInfo});

    User.updateUser(req, (err, data)=>{
        if(err) throw err;
        res.json({user: data});
    });
    // User.updateUser(userInfo, (err, updatedUser) => {
    //     if (err) throw err;
    //     if(updatedUser){
    //         console.out(updatedUser);
    //         res.json(updatedUser);
    //     }
    // });
});

//SearchRes
router.post('/search', (req, res, next) => {
    //const username = req.body.hpWhereInputBox;
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