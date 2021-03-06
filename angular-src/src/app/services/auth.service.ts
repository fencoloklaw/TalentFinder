import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient) {
    }

    uploadPicture(image): Observable<any>{
        return this.http.post(environment.serverUrl + '/users/upload', image);
    }

    tokenGetter() {
        return localStorage.getItem('access_token');
    }

    registerUser(user): Observable<any> {
        return this.http.post(environment.serverUrl + '/users/register', user);
    }
    createJobPost(jobPost): Observable<any> {
        return this.http.post(environment.serverUrl + '/users/postjob', jobPost);
    }

    authenticateUser(user): Observable<any> {
        return this.http.post(environment.serverUrl + '/users/authenticate', user);
    }

    storeUserData(token, user) {
        localStorage.setItem('access_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    getProfile(): Observable<any> {
        this.loadToken();
        const headers = new HttpHeaders().set('Authorization', this.tokenGetter());
        return this.http.get(environment.serverUrl + '/users/profile', {headers});
    }

    getProfilePicture(avatar): Observable<any> {
        this.loadToken();
        const headers = new HttpHeaders().set('Authorization', this.tokenGetter());
        return this.http.put(environment.serverUrl + '/users/profilePicture', avatar, {headers});
    }

    updateProfile(user): Observable<any> {
        this.loadToken();
        const headers = new HttpHeaders().set('Authorization', this.tokenGetter());
        return this.http.put(environment.serverUrl + '/users/updateProfile',  user, {headers});
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
