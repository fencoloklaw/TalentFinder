import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {SearchService} from "../../services/search.service";
import {DataService} from "../../services/data.service";
import {ToasterService} from "../../services/toaster.service";

@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.component.html',
  styleUrls: ['./searchjobs.component.css']
})
export class SearchjobsComponent implements OnInit {
    viewArrayJobPosts: boolean;
    whatInput: String;
    whereInput: String;
    searchData : any;
    dataArray : any;
    dataArrayLength : Number;
    numberOfPages: Number;
    currentPage: any;
    jobPost: any;
    constructor(private router: Router,
                private validateService: ValidateService,
                private authService: AuthService,
                private searchService: SearchService,
                private dataService: DataService,
                private  toasterService: ToasterService) {
    }
    ngOnInit() {
        if((this.validateService.validateNotNull(this.dataService.whatData))&&(this.validateService.validateNotNull(this.dataService.whereData))){
            this.whatInput = this.dataService.whatData;
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if(this.validateService.validateNotNull(this.dataService.whereData)) {
            this.whatInput = "";
            this.whereInput = this.dataService.whereData;
            this.onSearchSubmit();
        }
        else if(this.validateService.validateNotNull(this.dataService.whatData)) {
            this.whatInput = this.dataService.whatData;
            this.whereInput = "";
        }
        else {
            this.whatInput = "";
            this.whereInput = "";
            if(this.whereInput == ""){
                this.findLocation();
            }
        }
        this.viewArrayJobPosts = true;
    }

    onSearchSubmit() {
        const search = {
            whatInput: this.whatInput,
            whereInput: this.whereInput
        };

        if (this.validateService.validateNotNull(this.whereInput)) {
            this.searchService.searchJobPost(search).subscribe(data => {
                if (data.success) {
                    this.toasterService.success('Found Matches!');
                    this.searchData = data;
                    this.dataArrayLength = data.documents.length;
                    this.numberOfPages = Math.ceil(data.documents.length/10);
                    this.currentPage = 1;
                    this.dataArray = data.documents.slice(this.currentPage*10 - 10, this.currentPage*10);
                    this.viewArrayJobPosts = true;
                }
                else {
                    this.toasterService.warning(data.msg);
                }
            });
        }
        else {
            this.toasterService.warning('Where field has no value');
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

    showJobPost(data){
        this.viewArrayJobPosts = false;
        this.jobPost = data;
    }

    returnSearch(){
        this.viewArrayJobPosts = true;
        this.dataArray = this.searchData.documents.slice(this.currentPage * 10 - 10, this.currentPage * 10);
        this.jobPost = "";
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
