import {Component, OnInit} from '@angular/core';
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
    hpSkillInputBox: String;
    hpWhereInputBox: String;
    user: Object;

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
    }

    onSearchSubmit() {
        const search = {
            hpSkillInputBox: this.hpSkillInputBox,
            hpWhereInputBox: this.hpWhereInputBox
        }
        if (this.validateService.validateNotNull(this.hpWhereInputBox)) {
            //this.router.navigate(['searchtalent']);
            //find related information
            //display ordered list
            this.searchService.searchUser(search).subscribe(data => {
                if (data.success) {
                    this.flashMessage.show('success', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });

                    let docArray = data.documents;
                    let element = document.getElementById("search-container");
                    // document.write(docArray);
                    // document.write("<br/>");
                    let docArraySize = docArray.length;
                    // document.write(docArraySize);
                    for(let i = 0; i<docArraySize; i++ ){
                        //load 10
                        element.innerHTML += docArray[i].name + " " + docArray[i].email + "</br>";

                    }
                }
                else {
                    this.flashMessage.show(data.msg, {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                }
            });

        }
        else {
            this.flashMessage.show('Where has not been specified', {cssClass: 'alert-danger', timeout: 3000});
        }
    }
}
