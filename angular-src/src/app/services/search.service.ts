import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../environments/environment";

@Injectable()
export class SearchService {
    search: any;
    city: any = "";
    region: any = "";

    constructor(private http: HttpClient) {
    }

    searchUser(search): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.post(environment.serverUrl + '/users/search', search, {headers: headers});
    }

    searchJobPost(search): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.post(environment.serverUrl + '/users/searchJobs', search, {headers: headers});
    }

    getRelatedSkills(search): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.post(environment.serverUrl + '/users/recommendations', search, {headers: headers});
    }

    getAddress() : Observable<any> {
        return this.http.get('https://ipinfo.io/geo');
    }

    setAddress(res : any) {
        this.city = res.city;
        this.region = res.region;
    }
}
