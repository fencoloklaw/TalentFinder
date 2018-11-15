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
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        return this.http.post('search', search, {headers: headers});
    }

    getRecommendedJobs(): Observable<any>{
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        return this.http.post('search', '', {headers: headers});
    }

    getAddress() : Observable<any>{
        return this.http.get('https://ipinfo.io/geo');
    }

    setAddress(res : any){
        this.city = res.city;
        this.region = res.region;
    }
}
