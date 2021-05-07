import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent {
  @ViewChild('f') signup = "NgForm";
  isActive1: Boolean = true;
  isActive2: Boolean = false;
  demo: Boolean = true;
  constructor(private router: Router) {
  }
  onSubmit() {
    console.log(this.signup);
    this.router.navigate(['/success']);

  }

  onItemChange(event: any) {
    if (event.target.value == "card") {
      this.isActive1 = true;
      this.isActive2 = false;

    }
    else if (event.target.value == "paypal") {
      this.isActive1 = false;
      this.isActive2 = true;
    }
  }
  getColor() {
    return this.demo == this.isActive1 ? 'black' : 'grey';
  }
  getColor2() {
    return this.demo == this.isActive2 ? 'black' : 'grey';
  }

  back(){
    this.router.navigate(['/shipping']);
  }


}
