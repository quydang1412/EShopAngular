import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { mainRoutes } from '../main/main.routes';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ProductCategoryComponent,

  ],
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    UtilityService,
    AuthenService
  ]
})
export class MainModule { }
