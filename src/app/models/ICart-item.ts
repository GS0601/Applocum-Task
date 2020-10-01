import { from } from 'rxjs';
import { IProduct} from 'src/app/models/IProduct';

export class CartItem {
    Name: string;
    qty: number;
    price:number;
    location: string;

    constructor(id: number,product: IProduct,qty = 1){
        this.Name = product.name
        this.price = product.price;
        this.qty = qty;

    }
}