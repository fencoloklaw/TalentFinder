import {Component, OnInit} from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SearchService} from "../../services/search.service";
import {ToasterService} from "../../services/toaster.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    email: String;
    password: String;
    lastName: String;
    firstName: String;
    skill: String;
    city: String;
    region: String;

    constructor(private validateService: ValidateService,
                private authService: AuthService,
                private router: Router,
                private searchService : SearchService,
                private toasterService : ToasterService) {
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
            this.toasterService.warning('Fill in all required fields');
            return false;
        }

        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.toasterService.warning('Invalid email');
            return false;
        }

        //Register User
        this.authService.registerUser(user).subscribe(data => {
            if(data.err){
                    this.router.navigate(['/register']).then(()=>{
                    this.toasterService.error('Something went wrong: ' + data.err);
                });
            }
            this.router.navigate(['/login']).then(()=>{
               this.toasterService.success('You are now registered!');
            });
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
