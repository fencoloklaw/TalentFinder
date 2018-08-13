import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ValidateService} from "../../services/validate.service";
import {ToasterService} from "../../services/toaster.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: String;
    password: String;

    constructor(private authService: AuthService,
                private router: Router,
                private validateService: ValidateService,
                private toasterService: ToasterService
                ) {
    }

    ngOnInit() {
        this.email = "";
        this.password = "";

    }

    onLoginSubmit() {
        const user = {
            email: this.email,
            password: this.password
        };

        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.router.navigate(['dashboard']).then(() => {
                    this.toasterService.success('You are now logged in');
                });
            } else {
                this.router.navigate(['login']).then(() => {
                    this.toasterService.warning(data.msg);
                });
            }
        });
    }

    validLogin(){
        if((this.email.length > 0) && (this.password.length > 0) && this.validateService.validateEmail(this.email)){
            return true;
        }
        else{
            return false;
        }
    }

}
