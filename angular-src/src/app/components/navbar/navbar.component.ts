import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ToasterService} from "../../services/toaster.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(private authService: AuthService,
                private router: Router,
                private toasterService: ToasterService) {
    }


    onLogoutClick() {
        this.authService.logout();
        this.router.navigate(['/login']).then(()=> {
            this.toasterService.success('You are logged out');
        });
        return false;
    }
}
