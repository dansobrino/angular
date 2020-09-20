import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MgListComponent } from './mg-list/mg-list.component';
import { MgResolverService } from './mg-resolver.service';
import { UsaComponent } from './usa/usa.component';
import { MexComponent } from './mex/mex.component';
import { OtherComponent } from './other/other.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashDetailsComponent } from './dash-details/dash-details.component';
// import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
// import { MbRegComponent } from './mb-reg/mb-reg.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', 
    redirectTo: 'mariachis', 
    pathMatch: 'full' 
  },
  { 
    path: 'mariachis', 
    component: MgListComponent, 
    resolve: {mariachis: MgResolverService} 
  },
  { 
    path: 'mariachis/usa', 
    component: UsaComponent, 
    resolve: {mariachis: MgResolverService} 
  },
  { 
    path: 'mariachis/mex', 
    component: MexComponent, 
    resolve: {mariachis: MgResolverService} 
  },
  { 
    path: 'mariachis/other', 
    component: OtherComponent, 
    resolve: {mariachis: MgResolverService} 
  },
  { 
    path: 'mariachis/dashboard', 
    component: DashboardComponent, 
    resolve: {mariachis: MgResolverService} 
  },
  { path: 'mariachis/user', 
  component: UserComponent 
  },
  // { path: 'mariachis/user/login', 
  // component: LoginComponent, 
  // },
  // { path: 'mariachis/user/reset-password', 
  // component: ResetPasswordComponent, 
  // },
  // { 
  //   path: 'mariachis/user/registration', 
  //   component: MbRegComponent 
  // },
  { 
    path: 'mariachis/detail/:id', 
    component: DashDetailsComponent, 
    resolve: {mariachis: MgResolverService} 
  }
  // { 
  //   path: 'mariachis/detail/:id', 
  //   component: DashDetailsComponent, 
  //   resolve: {mariachis: MgResolverService} 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
