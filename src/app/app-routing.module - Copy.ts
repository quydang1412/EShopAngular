import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LoginTemplateComponent} from './login-template/login-template.component';

const routes: Routes = [
  //localhost:4200
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {path: 'loginTemplate', loadChildren: () => import('./login-template/login-template.module').then(m => m.LoginTemplateModule)},

  //localhost:4200/login
  { path: 'login', loadChildren: () => import('./login/login.module').then(m =>m.LoginModule) },

  //localhost:4200/main
  { path: 'main', loadChildren: () => import('./main/main.module').then(m =>m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
