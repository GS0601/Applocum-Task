import { Component, OnInit } from '@angular/core';
import { MessangerService } from 'src/app/services/messanger.service'
import { IProduct } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/ICart-item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;

  constructor(private _msg: MessangerService, private _cartservice: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this._msg.getMsg().subscribe((product:IProduct)=>{
      this.loadCartItems();
  })
  }

  loadCartItems(){
    this._cartservice.getCartItem().subscribe((items : CartItem[])=>{
      this.cartItems = items;
      this.calCartTotal();
    })
  }

  calCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price) 
    })
  }

}
  

