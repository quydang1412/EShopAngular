import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { NotificationService } from './core/services/notification.service';
// import { UserComponent } from './main/user/user.component';
// import { ProductComponent } from './main/product/product.component';
// import { HomeComponent } from './main/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginTemplateComponent,
    MainComponent,
    // UserComponent,
    // ProductComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
