import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MbRegComponent } from '../mb-reg/mb-reg.component';
import { LoginComponent } from '../login/login.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

const routes: Routes = [
  { path: 'mariachis/user/login', component: LoginComponent },
  { path: 'mariachis/user/reset-password', component: ResetPasswordComponent },
  { path: 'mariachis/user/registration', component: MbRegComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
