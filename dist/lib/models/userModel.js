"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/models/userModel.ts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
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
//# sourceMappingURL=userModel.js.map