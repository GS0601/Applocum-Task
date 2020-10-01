
  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from 'src/app/models/ICart-item';
import { IProduct } from '../models/IProduct';
import { Subject } from 'rxjs'


const cartUrl = "http://localhost:3000/carts";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }

  getCartItem() : Observable<CartItem[]>{
    return this._http.get<CartItem>(cartUrl).pipe(
      map((result : any) =>{
          let cartItems : CartItem[] = [];
          for(let item of result ){
          
            let productExists = false
  
            for(let i in cartItems){
                  if(cartItems[i].Name ===item.product.name){
                       cartItems[i].qty++
                       productExists = true
                       break;
                 }
                }
    
                if(!productExists){
                  cartItems.push(new CartItem(item.id , item.product));
                }
                else{
              
                }
          }

          return cartItems;
      })
    )
  }

  addProductToCart(product : IProduct) : Observable<any>{
    return this._http.post(cartUrl, {product})
  }
}
