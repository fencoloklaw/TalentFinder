import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    hpSkillInputBox: String;
    hpWhereInputBox: String;
    @HostListener('window:resize')
    onResize(){
        // console.log("resize :D");
        

    }

    constructor(private router: Router,
                private flashMessage: FlashMessagesService,
                private validateService: ValidateService,
                private authService: AuthService,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.hpSkillInputBox = "";
        this.hpWhereInputBox = "";
    }
    onSearchSubmit() {
        // const search = {
        //     hpSkillInputBox: this.hpSkillInputBox,
        //     // hpWhereInputBox: this.hpWhereInputBox
        // }

        if (this.validateService.validateNotNull(this.hpWhereInputBox)) {
            this.dataService.skillData = this.hpSkillInputBox;
            this.dataService.whereData = this.hpWhereInputBox;
            this.router.navigate(['searchtalent']);
        }
        else {
            this.flashMessage.show('Where has not been specified', {cssClass: 'alert-danger', timeout: 3000});
        }
    }
}
