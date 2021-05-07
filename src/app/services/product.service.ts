import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products:Product[] = [
  //   new Product(1, 'Book','This is product description',100,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINaOiWDI505ivaAx3oPoHLr_epvQ9KVvO8Lxu1YXniCpxq1NDJUL_ObhdwcBbVcv4qsfXjIc&usqp=CAc",'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKLYL-h4TTlDqEYil6-gLYp1qMb9MFQnsmRNo-pZyseUKLEORW6aG_iRG3yAlJ4qLRW6hj8UH&usqp=CAc','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURcYc_9l46Zek-eyzgzJFKBjZOo_Akv4Br1G0qAktQectopejvoFqJ2f6nA&usqp=CAc'],1,['blue','purple','orange'],[{username:'charu',comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti temporibus doloremque quos. Voluptas mollitia ea suscipit dicta, dolorum quasi. Itaque recusandae cum officiis earum non sapiente dicta voluptas illum!',ratings:4},]),

    
  //   new Product(2, 'Angular book','This is Angular Book ',600,['../assets/images/lapiblack','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),

  //   new Product(3, 'Rubix Cube','This is Rubix Cube',190,['../../assets/images/lapiblack','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),

  //   new Product(4, 'Mobile','This is Mobile Phone' ,610,['../../assets/images/lapiBlue','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),

  //   new Product(5, 'Bluetooth earphone','This is Earphone',1700,['../assets/images/lapiBlue','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),

  //   new Product(6, 'HeadPhone','This is product description',1800,['../../assets/images/lapiBlue','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),

  //   new Product(7, 'Product7','This is product description',130,['../../assets/images/lapiBlue','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),
  //   new Product(8, 'Product8','This is product description',1200,['../../assets/images/lapiBlue','../../assets/images/lapigrey','../../assets/images/lapiblack'],1,['red','yellow','green'],[{username:'charu',comment:'good',ratings:4}]),
  // ]
  // constructor() { }

  // getProducts():Product[] {
  //   return this.products
  // }
  constructor(private http:HttpClient){}
  url:string="http://localhost:3000/Products";
  getProducts(){
    return this.http.get<Product[]>(this.url);
  }
}

