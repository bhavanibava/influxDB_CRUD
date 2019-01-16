import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const root:Routes = [{
  path : 'home',
  component : HomeComponent
},
{
  path : 'login',
  component : LoginComponent
},
{
  path : 'signup',
  component : SignupComponent
},
{
  path : '',
  loadChildren : './task-routing/task-routing.module#TaskRoutingModule'
}
]
@NgModule({
  imports: [
    RouterModule.forRoot(root),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
