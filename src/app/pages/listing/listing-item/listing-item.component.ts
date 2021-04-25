import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {
  @Input() productItem?: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
