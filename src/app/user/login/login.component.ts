import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mouseoverLogin;
  userName;
  password;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    this.auth.loginUser(formValues.userName, formValues.password);
    this.home();
  }

  cancel(){
    this.home();
  }

  home(){
    this.router.navigate(['/cars']);
  }
}
