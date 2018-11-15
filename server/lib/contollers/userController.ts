import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {

    public getUserById (id: Request, res: Response) {
        User.findById(id, res);
    }

    public getUserByEmail (email: Request, res: Response) {
        const query = {email: email};
        User.findOne(query, res);
    }

    public getMatchingUsers (req: Request, res: Response) {
        User.find({"skill": new RegExp(req.body.skillInput, "i"),
                    "city": new RegExp(req.body.whereInput, "i")},
                    res);
    }

    public addUser (newUser: Request, res: Response) {
        bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err, hash) => {
             if (err) throw err;
             newUser.password = hash;
             newUser.save(res);
           });
        });
    }

    public comparePassword (candidatePassword: Request, hash: Request, res: Response) {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err) throw err;
            res(null, isMatch);
        });
    }

    public updateUser (req: Request, res: Response){
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
                oldUser.save(res);
            }
        });
    }
}