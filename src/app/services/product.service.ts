import { Injectable } from '@angular/core';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1, 'Product1','This is product description',100,'https://pngimg.com/uploads/book/book_PNG2109.png'),
    new Product(2, 'Product2','This is Angular Book ',120,'https://images-na.ssl-images-amazon.com/images/I/718rCk+pGeL.jpg'),
    new Product(3, 'Product3','This is Rubix Cube',107,"https://i.ytimg.com/vi/IqdV8crqSYM/maxresdefault.jpg"),
    new Product(4, 'Product4','This is Mobile Phone' ,600,"https://dlcdnwebimgs.asus.com/gain/fd28a933-fb66-4bca-80ec-9d95deb07d5b/"),
    new Product(5, 'Product5','This is Earphone',700,"https://images-na.ssl-images-amazon.com/images/I/717aeqCigsL._SL1500_.jpg"),
    new Product(6, 'Product6','This is product description',800,"data:image/jpeg;base64,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"),
    new Product(7, 'Product7','This is product description',100,"https://img.tatacliq.com/images/i6/437Wx649H/MP000000005678647_437Wx649H_20200814131726.jpeg"),
    new Product(8, 'Product8','This is product description',100,"https://img.gkbcdn.com/s3/p/2019-07-08/a6s-tws-wireless-earphones-black-1574132635431.jpg"),
  ]
  constructor() { }

  getProducts():Product[] {
    return this.products
  }
}