import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { SystemConstants } from './../core/common/system.constants';
import { LoggedInUser } from './../core/domain/loggedin.user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthenService {

  constructor(private _http: HttpClient) { }

  // login(username: string, password: string) {
  //   let body = "userName=" + encodeURIComponent(username) +
  //     "&password=" + encodeURIComponent(password) +
  //     "&grant_type=password";
  //   let headers = new Headers();
  //   headers.append("Content-Type", "application/x-www-form-urlencoded");
  //   let options = new RequestOptions({ headers: headers });

  //   return this._http.post(SystemConstants.BASE_API + '/api/oauth/token', body, options).map((response: Response) => {
  //     let user: LoggedInUser = response.json();
  //     if (user && user.access_token) {
  //       localStorage.removeItem(SystemConstants.CURRENT_USER);
  //       localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
  //     }
  //   });
  // }

  login(username: string, password: string) {
    let body = "userName=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) +
      "&grant_type=password";
    let headersContent = new HttpHeaders({
      "Content-Type" : "application/x-www-form-urlencoded"
    });
    //headersContent.append("Content-Type", "application/x-www-form-urlencoded");
    
    let options = {headers: headersContent};

    this._http.post<any>(SystemConstants.BASE_API + '/api/oauth/token', body, options).subscribe((response: Response) => {
      let user: LoggedInUser = response.json();
      if (user && user.access_token) {
        localStorage.removeItem(SystemConstants.CURRENT_USER);
        localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
      }
    });

    return this._http.post<any>(SystemConstants.BASE_API + '/api/oauth/token', body, options);
  }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }

  isUserAuthenticated(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null) {
      return true;
    }
    else
      return false;
  }

  getLoggedInUser(): LoggedInUser {
    let user:any = LoggedInUser;
    if (this.isUserAuthenticated()) {
      let userData:any = {};
      let userJson = localStorage.getItem(SystemConstants.CURRENT_USER) || null;
      userData = userJson != null ? JSON.parse(userJson) : {};    
      user = new LoggedInUser(userData.access_token, userData.username, userData.fullName, userData.email, userData.avatar);
    }
    else
      user = null;
    return user;
  }

}
