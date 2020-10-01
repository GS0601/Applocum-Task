export class IProduct {
    name : any;
    price : number;
    location : string;
    qty : number;

    constructor(name: string,price=0,location: string,qty: number){
        this.name = name;
        this.price = price;
        this.location = location;
        this.qty = qty;
    }
  }
  