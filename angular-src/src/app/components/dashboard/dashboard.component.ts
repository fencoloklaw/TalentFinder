import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

    email: String;

    constructor(private validateService: ValidateService,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }
}
