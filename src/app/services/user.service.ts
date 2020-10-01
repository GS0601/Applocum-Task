import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

const  dataURL = `http://localhost:3000/login`;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }


    // Login User
    public loginUser(){
      let dataURL = `http://localhost:3000/sign_in`;
      return  this._httpClient.get(dataURL)
    }

    //is logged in
  //  public isLoggedIn(){
  //   if(localStorage.getItem('token')){
  //     return true;

  //   }
  //   else{
  //     return false;
  //   }
  // }
  
}