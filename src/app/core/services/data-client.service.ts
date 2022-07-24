import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { SystemConstants} from './../core/common/system.constants';
import { AuthenService } from './authen.service';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { Observable, throwError } from 'rxjs';
import { MessageConstants} from './../core/common/message.constants'; 
@Injectable({
  providedIn: 'root'
})
export class DataClientService {
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    })
  }
  constructor(
    private _httpClient: HttpClient, 
    private _router: Router,
    private _authenService: AuthenService, 
    private _notificationService:NotificationService, 
    private _utilityService: UtilityService) {
    }

  get(uri: string): Observable<any> {
    this.httpOption.headers.delete('Authorization');
    this.httpOption.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._httpClient.get<any>(SystemConstants.BASE_API + uri, this.httpOption);
  }

  post(uri: string, data: any) {
    this.httpOption.headers.delete('Authorization');
    this.httpOption.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._httpClient.post<any>(SystemConstants.BASE_API + uri, data, this.httpOption);
  }

  put(uri: string, data: any) {
    this.httpOption.headers.delete('Authorization');
    this.httpOption.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._httpClient.put<any>(SystemConstants.BASE_API + uri, data, this.httpOption);
  }

  delete(uri: string, key: string, id: string) {
    this.httpOption.headers.delete('Authorization');
    this.httpOption.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._httpClient.delete<any>(SystemConstants.BASE_API + uri + '/?' + key + '=' + id, this.httpOption);
  }

  postFile(uri: string, data: any) {
    let httpOptionFile = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      })
    }
    httpOptionFile.headers.delete('Authorization');
    httpOptionFile.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._httpClient.post<any>(SystemConstants.BASE_API + uri, data, httpOptionFile);
  }

  public handleError(error: any) : void {
    if(error.status == 401){
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }else{
      let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusTex}` : "Lỗi hệ thống";
      this._notificationService.printErrorMessage(errMsg);  
      throwError(() => new Error(errMsg));  
    }
  }

  

}
