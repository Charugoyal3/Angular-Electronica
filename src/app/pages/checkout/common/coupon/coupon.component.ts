import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
  carts: any;
  cartTotal = 0;
  totalBill: number = 0;
  totalamount: number = 0;
  name = "";
  message = "Coupon Successfull"
  coupon = "Bootcamp2021";


  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems.subscribe((val) => {
      this.carts = val;
    

    });

    for (let i in this.carts) {
      this.cartTotal += (this.carts[i].qty * this.carts[i].price);
      console.log(this.cartTotal);

    }
    if (localStorage.getItem('bill') == "null") {
      this.totalBill = 13 + this.cartTotal;
    }
    else {
      this.totalBill = JSON.parse(localStorage.getItem('bill') || '{}');
    }

  }
  onKeyUpEnter($event: any) {
    if ($event.target.value == "Bootcamp2021") {
      this.totalBill = (this.cartTotal - ((this.cartTotal * 10) / 100)) + 13;

    }
    localStorage.setItem('bill', JSON.stringify(this.totalBill));
    return (localStorage.getItem('bill'));

  }
}
    



