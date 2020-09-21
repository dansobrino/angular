import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MbRegComponent } from '../mb-reg/mb-reg.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { LoginComponent } from '../login/login.component';




@NgModule({
  declarations: [MbRegComponent, ResetPasswordComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    MbRegComponent, 
    ResetPasswordComponent, 
    LoginComponent
  ]
})
export class AuthModule { }
