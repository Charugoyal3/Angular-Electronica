import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent {
  @ViewChild ('f') signup="NgForm";
  constructor(private router:Router){}
  onSubmit(f:any){
    // console.log("gshc");
    this.router.navigate(['/payment']);
    console.log(f.value);
    localStorage.setItem("user",JSON.stringify(f.value));
    
  }
 
  back(){
    this.router.navigate(['/shopping']);
  }


  

}
