import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import * as alertify from 'alertifyjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user = {
    email : '',
    password : ''
  };

   public successMsg;
  public errorMsg;
  public emptyForm;
  public userData;
  constructor(private _userService:UserService,
              private _router:Router,
              private nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

   //submitLogin
   public submitLogin(){
    console.log(this.submitLogin);
    this._userService.loginUser().subscribe((response:any)=>{
     response.forEach(element => {
       if(this.user.email===element.email && this.user.password===element.password)
       {
        this._router.navigate( ['/dashboard']);
        alertify.success("logged in !!");
       }
       else
       {
         alertify.error("invalid credentials"); 
       }
     });
    });
  }
}
