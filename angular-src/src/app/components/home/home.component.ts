import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from "../../services/data.service";
import {SearchService} from "../../services/search.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    skillInput: String;
    whereInput: String;
    loggedIn: boolean = false;

    constructor(private router: Router,
                private flashMessage: FlashMessagesService,
                private validateService: ValidateService,
                private authService: AuthService,
                private dataService: DataService,
                private searchService: SearchService) {
    }

    ngOnInit() {
        this.skillInput = "";
        this.whereInput = "";
        this.whereInput = this.searchService.city;
        this.loggedIn = this.authService.loggedIn();
        if(this.whereInput == ""){
            this.findLocation();
        }
    }

    onSearchSubmit() {
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.dataService.skillData = this.skillInput;
            this.dataService.whereData = this.whereInput;
            this.router.navigate(['searchtalent']);
        }
        else {
            this.flashMessage.show('Where has not been specified', {cssClass: 'alert-danger', timeout: 3000});
        }
    }

    findLocation():void {
        this.searchService.getAddress().subscribe(res => {
            if(res){
                this.whereInput = res.city;
                this.searchService.setAddress(res);
            }
            else {
                return "";
            }
        });
    }
}
