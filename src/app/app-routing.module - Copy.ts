import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LoginTemplateComponent} from './login-template/login-template.component';

const routes: Routes = [
  //localhost:4200
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {path: 'loginTemplate', component: LoginTemplateComponent},

  //localhost:4200/login
  { path: 'login', component: LoginComponent },

  //localhost:4200/main
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
