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
    skillInput: String;
    whereInput: String;
    user: Object;
    searchData : any;
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
            this.skillInput = this.dataService.skillData;
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if(this.validateService.validateNotNull(this.dataService.whereData)) {
            this.skillInput = "";
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if(this.validateService.validateNotNull(this.dataService.skillData)) {
            this.skillInput = this.dataService.skillData;
            this.whereInput = "";
        }
        else {
            this.skillInput = "";
            this.whereInput = "";
            if(this.whereInput == ""){
                this.findLocation();
            }
        }
        this.viewArrayProfile = true;
    }

    onSearchSubmit() {
        const search = {
            skillInput: this.skillInput,
            whereInput: this.whereInput
        };

        if (this.validateService.validateNotNull(this.whereInput)) {
            this.searchService.searchUser(search).subscribe(data => {
                if (data.success) {
                    this.flashMessage.show('success', {
                        cssClass: 'alert-success',
                        timeout: 2000
                    });
                    this.searchData = data;
                    this.dataArrayLength = data.documents.length;
                    this.numberOfPages = Math.ceil(data.documents.length/10);
                    this.currentPage = 1;
                    this.dataArray = data.documents.slice(this.currentPage*10 - 10, this.currentPage*10);
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
            this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        }
        else{
            //do not display next
        }
    }

    onChangePageBack() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        }
        else{
            //do not display next
        }
    }

    showProfile(data){
        this.viewArrayProfile = false;
        this.profile = data;
    }

    returnSearch(){
        this.viewArrayProfile = true;
        this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        this.profile = "";
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
