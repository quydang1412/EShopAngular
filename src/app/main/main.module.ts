import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { ProductCategoryComponent } from './product-category/product-category.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ProductCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
