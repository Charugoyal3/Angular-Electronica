import { Component, OnInit } from '@angular/core';
import { CartService} from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  carts:any;
  cartTotal!:number;
  imageUrl:Array<number>=[];
  j:number=0;

  constructor(private cartService:CartService){
    this.cartService.cartItems.subscribe((val)=>{
        this.carts=val;
        console.log(this.carts);
    });
  
  
  }
  ngOnInit(){
    for(let i in this.carts){
      this.imageUrl[this.j]=this.carts[i].imageurl[localStorage.getItem("imageColor")|| ""];
      this.j++;

      // console.log(this.imageUrl);
    }
  }

  onChangeEvent(cartItem: any,event:any){
    this.cartService.cart=cartItem;
    // console.log(cartItem.price);
    cartItem.qty=event.target.value;
  
    this.cartTotal=cartItem.qty*cartItem.price;
    // console.log(this.cartTotal);

  }
}
