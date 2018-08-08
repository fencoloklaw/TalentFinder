import {Component, OnInit} from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    // name: String;
    email: String;
    password: String;
    lastName: String;
    firstName: String;
    skill: String;
    city: String;
    region: String;

    constructor(private validateService: ValidateService,
                private flashMessage: FlashMessagesService,
                private authService: AuthService,
                private router: Router,
                private searchService : SearchService) {
    }

    ngOnInit() {
        this.city = this.searchService.city;
        this.region = this.searchService.region;
        if (this.city == "" || this.region == "") {
            this.findLocation();
        }
    }

    onRegisterSubmit() {
        const user = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            skill: this.skill,
            city: this.city,
            region: this.region,
            password: this.password
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

    findLocation():void {
        this.searchService.getAddress().subscribe(res => {
            if(res){
                this.city = res.city;
                this.region = res.region;
                this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    }
}
