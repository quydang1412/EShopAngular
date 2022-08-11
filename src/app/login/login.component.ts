import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageConstants } from '../core/common/message.constants';
import {UrlConstants} from '../core/common/url.constants';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  returnUrl: string = "";
  //returnUrl: string = "";
  constructor(
    private authenService: AuthenService, 
    private notificationService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;

    this.activatedRoute.queryParams.subscribe(params => {
        this.returnUrl = params['returnUrl']; 
    });

    this.authenService.login(this.model.username, this.model.password).subscribe((response)=>{
      if(this.returnUrl== ""){
        this.router.navigate([UrlConstants.MAIN]);
      }else{
        this.router.navigate([this.returnUrl]);
      }
      
    }, error => {
      this.notificationService.printErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      this.loading = false;
      //this.router.navigate([UrlConstants.USER]);
    });
  }



}
