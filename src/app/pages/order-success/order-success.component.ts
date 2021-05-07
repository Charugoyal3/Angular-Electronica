import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  users!:any;
  constructor() {
    localStorage.setItem('bill','null');
    this.users = JSON.parse(localStorage.getItem('user')|| '{}');
   }

  ngOnInit(): void {
  }
  success(){
    localStorage.removeItem("user");
  }
}
