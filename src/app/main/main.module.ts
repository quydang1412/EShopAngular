import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { mainRoutes } from '../main/main.routes';
import { RouterModule, Routes } from '@angular/router';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    HomeComponent,
    ProductCategoryComponent,
    ProductComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  providers: [
    UtilityService,
    AuthenService
  ]
})
export class MainModule { }
