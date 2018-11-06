import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService{
    authToken: any;
    user: any;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient) {
    }

    tokenGetter(){
        return localStorage.getItem('access_token');
    }

    // http://localhost:8080/
    registerUser(user): Observable<any> {
        return this.http.post(environment.serverUrl + 'users/register', user);
    }

    authenticateUser(user):Observable<any> {
        return this.http.post(environment.serverUrl + 'users/authenticate', user);
    }

    storeUserData(token, user) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', JSON.stringify(user)); //local storage must be string
        this.authToken = token;
        this.user = user;
    }

    getProfile():Observable<any> {
        this.loadToken();
        let headers = new HttpHeaders().set('Authorization', this.tokenGetter());
        return this.http.get(environment.serverUrl + 'users/profile', {headers});
    }

    updateProfile(user):Observable<any>{
        this.loadToken();
        let headers = new HttpHeaders().set('Authorization', this.tokenGetter());
        return this.http.put(environment.serverUrl + 'users/updateProfile',  user,{headers});
    }

    loadToken() {
        const token = localStorage.getItem('access_token');
        this.authToken = token;
    }

    loggedIn() {
        const refreshToken = this.tokenGetter();
        return refreshToken != null && !this.jwtHelper.isTokenExpired(refreshToken);

    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}
