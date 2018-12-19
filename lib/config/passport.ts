import {IUser, UserSchema} from "../models/userModel";
const passport    = require('passport');
const passportJWT = require("passport-jwt");
import {DatabaseConfig} from './database';
const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy   = passportJWT.Strategy;
import * as mongoose from 'mongoose';

const User = mongoose.model<IUser>('User', UserSchema);

const config: DatabaseConfig = new DatabaseConfig();

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : config.secret
    },
    (jwtPayload, cb) => {
        //find the user in db if needed
        return User.findById(jwtPayload.user._id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));