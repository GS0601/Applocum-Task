import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {FormBuilder, PatternValidator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user = {
    email : '',
    password : '',
    firstname:'',
    lastname:'',
    mobile:'',
    role:'',
    dob:'',
    gender:'',
    deviceType:'',
    player:''
  };
  public pattren ="^((\\+91-?)|0)?[0-9]{10}$";
  public successMsg;
  public emptyForm;
  public errorMsg;
  public isEmptyForm;
  public isSubmitted;
  constructor(private _userService:UserService,
              private _router:Router,
              private formBuilder:FormBuilder) { }

 
  public registrationForm = this.formBuilder.group({
    firstname : ['', [Validators.required,Validators.minLength(5)]],
    lastname : ['', [Validators.required,Validators.minLength(5)]],
    email : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(5)]],
    mobile : ['',[Validators.required,Validators.pattern(this.pattren)] ],
    role: ['',[Validators.required]],
    dob:['',[Validators.required]],
    gender:['',[Validators.required]],
    deviceType:['',[Validators.required]],
    player:['',[Validators.required]]
  });


  ngOnInit(): void {
  }

  public getFirstName(){
    return this.registrationForm.get('firstname');
  }
  public getLastName(){
    return this.registrationForm.get('lastname');
  }

  public getPassword(){
    return this.registrationForm.get('password');
  }

  public getEmail(){
    return this.registrationForm.get('email');
  }
  public getRole(){
    return this.registrationForm.get('role');
  }
  public getDob(){
    return this.registrationForm.get('dob');
  }
  public getGender(){
    return this.registrationForm.get('gender');
  }
  public getDeviceType(){
    return this.registrationForm.get('deviceType');
  }
  public getPlayer(){
    return this.registrationForm.get('player');
  }


  public submitRegister(){
    if(this.getFirstName().value !== '' && this.getEmail().value !== '' && this.getPassword().value !== ''
     && this.getLastName().value !== '' && this.getGender().value !== '' && this.getDeviceType().value !== ''
    && this.getRole().value !== '' && this.getDob().value !== '' && this.getPlayer().value !== ''){
      let user = {
        firstname : this.getFirstName().value,
        email : this.getEmail().value,
        password : this.getPassword().value,
        lastname : this.getLastName().value,
        role: this.getRole().value,
        dob:this.getDob().value,
        gender:this.getGender().value,
        deviceType:this.getDeviceType().value,
        player:this.getPlayer().value
      };
    }
    else{
      this.isSubmitted = false;
      this.isEmptyForm = true;
    }
  }


}

