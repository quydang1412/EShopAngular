import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { AuthenService } from '../core/services/authen.service';
import { NotificationService } from '../core/services/notification.service';
import { HttpClientModule } from '@angular/common/http';
export const routes: Routes = [
  //localhost:4200/login
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  providers:[AuthenService, NotificationService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
