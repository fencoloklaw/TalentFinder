import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {DataService} from "../../services/data.service";
import {SearchService} from "../../services/search.service";
import {ToasterService} from "../../services/toaster.service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    skillInput: String;
    whereInput: String;

    constructor(private router: Router,
                private validateService: ValidateService,
                public authService: AuthService,
                private dataService: DataService,
                private searchService: SearchService,
                private toasterService: ToasterService) {
    }

    ngOnInit() {

        // this.filteredOptions = this.myControl.valueChanges
        //     .pipe(
        //         startWith(''),
        //         map(value => this._filter(value))
        //     );

        this.skillInput = "";
        this.whereInput = "";
        this.whereInput = this.searchService.city;
        if(this.whereInput == ""){
            this.findLocation();
        }
    }

    // private _filter(value: string): string[] {
    //     const filterValue = value.toLowerCase();
    //
    //     return this.options.filter(option => option.toLowerCase().includes(filterValue));
    // }

    onSearchSubmit() {
        if (this.validateService.validateNotNull(this.whereInput)) {
            this.dataService.skillData = this.skillInput;
            this.dataService.whereData = this.whereInput;
            this.router.navigate(['searchtalent']);
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
