import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  productList:Product[] = []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

}
