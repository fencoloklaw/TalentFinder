import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class SearchService {
    search: any;
    city: any = "";
    region: any = "";

    constructor(private http: Http) {
    }

    searchUser(search) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.serverUrl + 'users/search', search, {headers: headers})
            .map(res => res.json());
    }

    getRecommendedJobs(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.serverUrl + 'users/search', '', {headers: headers})
            .map(res => res.json());
    }

    getAddress(){
        return this.http.get('http://ipinfo.io/geo')
            .map(res => res.json());
        }

    setAddress(res : any){
        this.city = res.city;
        this.region = res.region;
    }
}
