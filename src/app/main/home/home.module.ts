import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const homeRoutes: Routes = [
  //localhost:4200/main/home
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  //localhost:4200/main/home/index
  { path: 'index', component: HomeComponent }
]


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
