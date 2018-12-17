//   /lib/models/jobPostModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface IJobPost extends mongoose.Document {
    companyName: string;
    expertise: string;
    estimatedFrequency: string;
    location: string;
    jobDescription: string;
    optionalQuestion1: string;
    optionalQuestion2: string;
    optionalQuestion3: string;
}

export var JobPostSchema = new Schema ({
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