import {Component, HostListener, OnInit} from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {SearchService} from '../../services/search.service';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-searchtalent',
    templateUrl: './searchtalent.component.html',
    styleUrls: ['./searchtalent.component.css']
})
export class SearchtalentComponent implements OnInit {
    viewArrayProfile: boolean;
    hpSkillInputBox: String;
    hpWhereInputBox: String;
    user: Object;
    myData : any;
    dataArray : any;
    dataArrayLength : Number;
    numberOfPages: Number;
    currentPage: any;
    profile: any;
    constructor(private router: Router,
                private flashMessage: FlashMessagesService,
                private validateService: ValidateService,
                private authService: AuthService,
                private searchService: SearchService,
                private dataService: DataService) {
    }
    ngOnInit() {
        if((this.validateService.validateNotNull(this.dataService.skillData))&&(this.validateService.validateNotNull(this.dataService.whereData))){
            this.hpSkillInputBox = this.dataService.skillData;
            this.hpWhereInputBox = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if(this.validateService.validateNotNull(this.dataService.whereData)) {
            this.hpSkillInputBox = "";
            this.hpWhereInputBox = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if(this.validateService.validateNotNull(this.dataService.skillData)) {
            this.hpSkillInputBox = this.dataService.skillData;
            this.hpWhereInputBox = "";
        }
        else {
            this.hpSkillInputBox = "";
            this.hpWhereInputBox = "";
        }
        this.viewArrayProfile = true;
    }

    onSearchSubmit() {
        const search = {
            hpSkillInputBox: this.hpSkillInputBox,
            hpWhereInputBox: this.hpWhereInputBox
        };

        if (this.validateService.validateNotNull(this.hpWhereInputBox)) {
            //this.router.navigate(['searchtalent']);
            //find related information
            //display ordered list
            this.searchService.searchUser(search).subscribe(data => {
                if (data.success) {
                    this.flashMessage.show('success', {
                        cssClass: 'alert-success',
                        timeout: 2000
                    });
                    this.myData = data;
                    this.dataArrayLength = data.documents.length;
                    this.numberOfPages = Math.ceil(data.documents.length/5);
                    this.currentPage = 1;
                    this.dataArray = data.documents.slice(this.currentPage*5 - 5, this.currentPage*5);
                    this.viewArrayProfile = true;
                }
                else {
                    this.flashMessage.show(data.msg, {
                        cssClass: 'alert-danger',
                        timeout: 2000
                    });
                }
            });
        }
        else {
            this.flashMessage.show('Where has not been specified', {cssClass: 'alert-danger', timeout: 3000});
        }
    }

    onChangePage() {
        if (this.currentPage < this.numberOfPages) {
            this.currentPage++;
            this.dataArray = this.myData.documents.slice(this.currentPage * 5 - 5, this.currentPage * 5);
        }
        else{
            //do not display next
        }
    }

    onChangePageBack() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.dataArray = this.myData.documents.slice(this.currentPage * 5 - 5, this.currentPage * 5);
        }
        else{
            //do not display next
        }
    }

    openProfile(data){
        this.viewArrayProfile = false;
        this.profile = data;
    }
}
