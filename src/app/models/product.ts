export class Product {
    id:number;
    name: string;
    description:string;
    price:number;
    imageurl:string;
    // color:string;
    // productReviews:[
    //     {
    //         username:"",
    //         comment:"",
    //         rating:5
    //     }
    // ]

    constructor(id:number, name:string, description:string, price:number, imageurl:string){
        this.id= id;
        this.name= name;
        this.description=description;
        this.price=price;
        this.imageurl=imageurl;
        // this.color=color;
        // this.productReviews.username=productReviews;
    }
}
