import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product"
@Injectable({
    providedIn:"root"
})
export class CartService {
    cartItems: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>
    (
        []
        
    );
    get cart(){
        return this.cartItems.asObservable();
    }
    set cart(cartItem:any){
        let productExists=false;
        let cartList=this.cartItems.value;
        // console.log(this.cartItems);
        for(let items in cartList){
           if(cartList[items].id===cartItem.id){
            //  console.log("in if block");
               cartItem.qty++;
               productExists=true;
               break;
           }

       }
       if(!productExists){
        //  console.log("in 2 if block");
        const currentValue = this.cartItems.value;
        const updatedValue = [...currentValue, cartItem];
        this.cartItems.next(updatedValue);
       }
    }
    
}