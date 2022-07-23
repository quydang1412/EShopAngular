import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTemplateComponent } from './login-template.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormBuilder, FormControl } from '@angular/forms';
export const routes:Routes = [
  {path:'', component:LoginTemplateComponent}
];


@NgModule({
  declarations: [
    LoginTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginTemplateModule { }