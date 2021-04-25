import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent {
  @ViewChild ('f') signup="NgForm";
  defaultQuestion='Country';
  title = 'forms';

  onSubmit(){
    console.log(this.signup);

  }

}
