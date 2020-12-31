import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerCallerService } from '../server-caller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  finalUser=[];
  userLoggedIn:boolean = true;

  userTextField:String = "";
  passwordTextField:String = "";

  constructor(public serverCaller:ServerCallerService, router:RouterModule) { }

  ngOnInit(): void {
    this.checkLoggedUser();
    console.log(this.userLoggedIn)
    if(this.userLoggedIn){
      //localStorage.setItem('User.username',(String)this.finalUser.username);
    }
  }

  login(){
    this.serverCaller.login(this.userTextField,this.passwordTextField).subscribe(
      response => {
        this.finalUser = response[0];
      },
      err => {
        console.log(err);
      }
    ) 
    console.log(this.finalUser);
  }

  checkLoggedUser(){
    this.userLoggedIn = (this.finalUser == null) ? false : true;
  }

}
