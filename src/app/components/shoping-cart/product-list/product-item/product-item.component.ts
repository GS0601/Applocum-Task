import { Component, OnInit,Input } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct'
import { MessangerService } from 'src/app/services/messanger.service'
import { CartService } from '../../../../services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

   @Input() productItem: IProduct

   @Input() addToWishlist: boolean;

  constructor(private msg: MessangerService,
              private cartService: CartService,
              private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe( () => {
    this.msg.sendMsg(this.productItem)
    })
  }
}
