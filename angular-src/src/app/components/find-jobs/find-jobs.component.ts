import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ValidateService} from "../../services/validate.service";
import {AuthService} from "../../services/auth.service";
import {DataService} from "../../services/data.service";
import {SearchService} from "../../services/search.service";
import {ToasterService} from "../../services/toaster.service";

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.component.html',
  styleUrls: ['./find-jobs.component.css']
})
export class FindJobsComponent implements OnInit {

    whatInput: String;
    whereInput: String;

    constructor(private router: Router,
                private validateService: ValidateService,
                public authService: AuthService,
                private dataService: DataService,
                private searchService: SearchService,
                private toasterService: ToasterService) {
    }

    ngOnInit() {
        this.dataService.employee = true;
        this.whatInput = "";
        this.whereInput = "";
        this.whereInput = this.searchService.city;
        if(this.whereInput == ""){
            this.findLocation();
        }
    }

    onSearchSubmit() {
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.dataService.whatData = this.whatInput;
            this.dataService.whereData = this.whereInput;
            this.router.navigate(['searchjobs']);
        }
        else {
            this.toasterService.warning('Where field has no value');
        }
    }

    findLocation():void {
        this.searchService.getAddress()
            .subscribe(res => {
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

