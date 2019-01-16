import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerData = {
    firstName : '',
    lastName : '',
    email : '',
    password :'',
    role : ''
  }

  constructor(private api : ApiService, private route : Router) { }
  registerDetails(registerData){

  }

  checkTokenValue(){
    if(localStorage.length !=0){
      // this.route.navigate(['/']);
      console.log('stage : login');
    }
    else{
      this.route.navigate(['/login']);
      console.log('stage : logout, so please login');
    }
  }
  ngOnInit() {
  }

}
