"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
const passport = require('passport');
const passportJWT = require("passport-jwt");
const database_1 = require("./database");
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
const mongoose = require("mongoose");
const User = mongoose.model('User', userModel_1.UserSchema);
const config = new database_1.DatabaseConfig();
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}, (jwtPayload, cb) => {
    //find the user in db if needed
    return User.findById(jwtPayload.user._id)
        .then(user => {
        return cb(null, user);
    })
        .catch(err => {
        return cb(err);
    });
}));
//# sourceMappingURL=passport.js.map