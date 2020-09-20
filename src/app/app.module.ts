import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MgListComponent } from './mg-list/mg-list.component';
import { MgDetailComponent } from './mg-detail/mg-detail.component';
import {MgServiceService} from './mg-service.service';
import { MaterialModule } from './material/material.module';
import { MyNgxBootstrapModule } from './my-ngx-bootstrap/my-ngx-bootstrap.module'
import { UsaComponent } from './usa/usa.component';
import { MexComponent } from './mex/mex.component';
import { OtherComponent } from './other/other.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashDetailsComponent } from './dash-details/dash-details.component';
import { MariachiSearchComponent } from './mariachi-search/mariachi-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MbRegComponent } from './mb-reg/mb-reg.component';
import { AlertComponent } from './_components/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MgListComponent,
    MgDetailComponent,
    UsaComponent,
    MexComponent,
    OtherComponent,
    NavComponent,
    UserComponent,
    MessagesComponent,
    DashboardComponent,
    DashDetailsComponent,
    MariachiSearchComponent,
    MbRegComponent,
    AlertComponent,
    LoginComponent,
    ResetPasswordComponent,
    DashboardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MyNgxBootstrapModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//     HttpClientInMemoryWebApiModule.forRoot(
//     InMemoryDataService, { dataEncapsulation: false }
// )
],
  providers: [MgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
