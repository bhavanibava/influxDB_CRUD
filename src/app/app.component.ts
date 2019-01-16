import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './api.service';

export interface selection{
  path : string;
  name : string;
  icon : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private api: ApiService, private router : Router){}
  title = 'taskManagement';
  hideFlag : boolean;
  routeList : selection[] = [
    {
      path : '/',
      name : 'Home',
      icon : 'home'
    },
    {
      path : '/list',
      name : 'List',
      icon : 'category'
    },
    {
      path : '/add',
      name : 'AddTask',
      icon : 'category'
    }
  ]

  logout(){
    if(localStorage.length > 0 ){
      localStorage.clear();
      this.router.navigate(['/']);
      this.hideFlag = false;
    }
    else{
      this.router.navigate(['/login']);
      if(this.router.navigated){
        this.hideFlag = true;
      }
    }
  }

  checkTokenValue(){
    if(localStorage.length >0){
      this.hideFlag = true;
    }
    else{
      this.hideFlag = false;
      this.router.navigate(['/login']);
    }
  }
}
