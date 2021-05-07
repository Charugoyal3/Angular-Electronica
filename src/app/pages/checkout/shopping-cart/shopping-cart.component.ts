import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService} from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent{
  carts:any;
  cartTotal!:number;

  constructor(private cartService:CartService){
    this.cartService.cartItems.subscribe((val)=>{
        this.carts=val;
        console.log(this.carts);
    });
  }

  onChangeEvent(cartItem: any,event:any){
    this.cartService.cart=cartItem;
    console.log(cartItem.price);
    cartItem.qty=event.target.value;
  
    this.cartTotal=cartItem.qty*cartItem.price;
    console.log(this.cartTotal);

  }
 




}
