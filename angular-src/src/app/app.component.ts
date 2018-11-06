import {Component} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {environment} from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    constructor(private toastr: ToastrService,
               )
    {
        console.log(environment.production);
    }

}

