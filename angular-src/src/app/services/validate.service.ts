import {Injectable} from '@angular/core';

@Injectable()
export class ValidateService {

    constructor() {
    }

    validateRegister(user) {
        if (user.email == undefined || user.password == undefined || user.lastName == undefined || user.firstName == undefined || user.skill == undefined || user.city == undefined || user.region == undefined) {
            return false;
        } else {
            return true;
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validateJobPost(jobPost){
        if (jobPost.companyName == undefined || jobPost.expertise == undefined || jobPost.estimatedFrequency == undefined || jobPost.jobDescription == undefined) {
            return false;
        } else {
            return true;
        }
    }

    validateNotNull(value) {
        if (value == undefined || value == "") {
            return false;
        }
        else {
            return true;
        }
    }
}
