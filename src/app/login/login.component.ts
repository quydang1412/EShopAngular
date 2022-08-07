import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageConstants } from '../core/common/message.constants';
import {UrlConstants} from '../core/common/url.constants';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string = "";
  constructor(
    private authenService: AuthenService, 
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password).subscribe((response)=>{
      this.router.navigate([UrlConstants.MAIN]);
    }, error => {
      this.notificationService.printErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      this.loading = false;
      //this.router.navigate([UrlConstants.USER]);
    });
  }



}
