export class Products {
    id: any;
    name: string;
    price: number;
    image: string;
    numberOfProducts: number;


    constructor(_id: any, _name: string, _price: number, _image: string, _numberOfProducts: number) {
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.image = _image;
        this.numberOfProducts = _numberOfProducts;
    }
}