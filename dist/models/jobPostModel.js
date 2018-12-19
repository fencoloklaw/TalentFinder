"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/models/jobPostModel.ts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.JobPostSchema = new Schema({
    companyName: {
        type: String,
        required: false
    },
    expertise: {
        type: String,
        required: true,
    },
    estimatedFrequency: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    optionalQuestion1: {
        type: String,
        required: false
    },
    optionalQuestion2: {
        type: String,
        required: false
    },
    optionalQuestion3: {
        type: String,
        required: false
    }
});
//# sourceMappingURL=jobPostModel.js.map