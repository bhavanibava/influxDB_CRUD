import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    email : '',
    password : ''
  }
  show : boolean;
  hideFlag :boolean;
  constructor(private api: ApiService, private route : Router) {
    this.show = false;
  }

  ngOnInit() {
    this.checkTokenValue();
  }
  hidepassword(){
    this.show = !this.show;
  }
  submit(loginData){
  }
  checkTokenValue(){
    if(localStorage.length !=0){
      Swal('stage : login');
      this.hideFlag = true;
      // this.route.navigate(['/']);
    }
    else{
      Swal('please login','info');
      this.hideFlag = false;
      this.route.navigate(['/login']);
    }
  }
}
