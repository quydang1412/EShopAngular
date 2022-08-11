import { Component, OnInit } from '@angular/core';
import { SystemConstants} from '../core/common/system.constants';
import { UrlConstants} from '../core/common/url.constants';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { LoggedInUser } from '../core/domain/loggedin.user';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public user: any = [];
  constructor(private utilityService: UtilityService, private authenService: AuthenService) { }
  
  ngOnInit(): void {
    if(SystemConstants.CURRENT_USER != null){
      const userJson = localStorage.getItem(SystemConstants.CURRENT_USER);
      this.user = userJson !== null ? JSON.parse(userJson) : [];
      
    }
    
  }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }
}
