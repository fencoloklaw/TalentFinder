import * as mongoose from "mongoose";
export interface IUser extends mongoose.Document {
    firstName: String;
    email: String;
    lastName: String;
    password: String;
    experience: String;
    skill: String;
    volunteer: String;
    city: String
    region: String;
    description: String;
    certificates: String;
    awards: String;
}