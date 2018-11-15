//   /lib/models/userModel.ts
import * as mongoose from 'mongoose';
import { IUser } from "../interface/userInterface";

export const Schema = mongoose.Schema;

export var UserSchema = new Schema ({
    firstName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    lastName: {
        type: String,
        required: false
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