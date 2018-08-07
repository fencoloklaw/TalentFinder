import {Component, OnInit} from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    email: String;
    password: String;
    lastName: String;
    firstName: String;
    skill: String;

    constructor(private validateService: ValidateService,
                private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onRegisterSubmit() {
        const user = {
            // name: this.name,
            email: this.email,
            // username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            skill: this.skill
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Fill in required fields', {cssClass: 'alert-danger', timeout: 3000});
            return false;
        }

        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use valid email', {cssClass: 'alert-danger', timeout: 3000});
            return false;
        }

        //Register User
        this.authService.registerUser(user).subscribe(data => {
            if(data.err){
                    this.flashMessage.show('Something went wrong: ' + data.err, {cssClass: 'alert-danger', timeout: 3000});
                    this.router.navigate(['/register']);
            }
            this.flashMessage.show('You are now registered and can log in', {
               cssClass:'alert-success',
               timeout: 2000
            });
            this.router.navigate(['/login'])
        });
    }
}
