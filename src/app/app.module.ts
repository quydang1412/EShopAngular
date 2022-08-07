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
import { UtilityService } from './core/services/utility.service';
import { AuthenService } from './core/services/authen.service';
// import { DataService } from './core/services/data.service';
// import { DataClientService } from './core/services/data-client.service';
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
    NotificationService, 
    UtilityService, 
    AuthenService,
    // DataService,
    // DataClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
