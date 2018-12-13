import {IUser, UserSchema} from "../lib/models/userModel";

const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy   = passportJWT.Strategy;
import * as mongoose from 'mongoose';

const User = mongoose.model<IUser>('User', UserSchema);

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : this.config.secret
    },
    function (jwtPayload, cb) {

        //find the user in db if needed
        return User.findById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));