import {Injectable} from '@angular/core';
// import {Http, Headers} from '@angular/http';
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class SearchService {
    search: any;
    city: any = "";
    region: any = "";

    constructor(private http: HttpClient) {
    }

    searchUser(search): Observable<any> {
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.post('users/search', search, {headers: headers});
    }

    getRecommendedJobs(): Observable<any>{
        let headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.post('users/search', '', {headers: headers});
    }

    getAddress() : Observable<any>{
        return this.http.get('https://ipinfo.io/geo');
        }

    setAddress(res : any){
        this.city = res.city;
        this.region = res.region;
    }
}
