import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { SystemConstants} from './../core/common/system.constants';
import { AuthenService } from './authen.service';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { observable, Observable, throwError } from 'rxjs';
import { MessageConstants} from './../core/common/message.constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private headers: Headers;
  constructor(private _http: Http,private _router: Router,private _authenService: AuthenService, 
  private _notificationService:NotificationService, private _utilityService: UtilityService, private headers:Headers) {

  }

  get(uri: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + uri, {headers: this.headers}).pipe(map(this.extractData));
  }

  post(uri: string, data?: any){
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, {headers: this.headers}).pipe(map(this.extractData));
  }

  put(uri: string, data?: any){
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + uri, data, {headers: this.headers}).pipe(map(this.extractData));
  }

  delete(uri: string, key: string, id: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.delete(SystemConstants.BASE_API + uri + '/?' + key + '=' + id, {headers: this.headers}).pipe(map(this.extractData));
  }

  postFile(uri: string, data?: any) {
    let newHeaders = new Headers();
    newHeaders.delete('Authorization');
    newHeaders.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, {headers: newHeaders}).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any){
    if(error.status == 401){
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }else{
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusTex}` : "Lỗi hệ thống";
      this._notificationService.printErrorMessage(errMsg);  
      throwError(() => errMsg);   
    }
  }
}
