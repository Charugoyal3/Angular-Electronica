import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent{
  @ViewChild ('f') signup="NgForm";
  genders= ['',''];

  onSubmit(){
    console.log(this.signup);

  }
}
