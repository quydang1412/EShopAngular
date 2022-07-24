import { Component, OnInit } from '@angular/core';
import { SystemConstants} from '../core/common/system.constants';
import { UrlConstants} from '../core/common/url.constants';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    
  }

  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }
}
