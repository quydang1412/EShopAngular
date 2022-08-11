import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { MainModule } from './main/main.module';
import {MainComponent} from './main/main.component';
import { LoginTemplateComponent} from './login-template/login-template.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [  
  //localhost:4200/login
  { path: 'login', component: LoginComponent },

  {path: 'loginTemplate', component: LoginTemplateComponent, canActivate: [AuthGuard]},
  
    //localhost:4200
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //localhost:4200/main
  { path: 'main', component: MainComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }