import { Injectable } from '@angular/core';
import { Products } from '../model/products';
import { v4 as uuidv4 } from 'uuid';
import { PersistenceService } from 'src/app/shared/persistence.service';

@Injectable()
export class ProductsService {

  constructor(private persistenceService: PersistenceService) { }


  products: Array<any> = [
    {
      PRODUCT: new Products(uuidv4(), "PC Gamer",
        2500,
        `<img src='..\\..\\assets\\pc.jpg' width='300px' height='300px'>`, 1)
    },
    {
      PRODUCT: new Products(uuidv4(), "iMac",
        2000,
        `<img src='..\\..\\assets\\mac.jpg' width='300px' height='300px'>`, 1)
    },
    {
      PRODUCT: new Products(uuidv4(), "Baby Yoda Doll",
        50,
        `<img src='..\\..\\assets\\bonecos.jpg' width='300px' height='300px'>`, 1)
    },

  ]

  getProducts() {
    return this.products;
  }


  shoppingCart: Array<any> = this.persistenceService.loadFromLocalStorage("shoppingCart");
  totalPrice: number = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'));

  addProduct(_id: string, _name: string, _price: number, _image: string, _numberOfProducts: number) {
    let product = {
      id: _id,
      name: _name,
      price: _price,
      image: _image,
      numberOfProducts: _numberOfProducts
    }

    this.persistenceService.addToLocalStorage(product, "shoppingCart", product.id)
    this.shoppingCart = this.persistenceService.loadFromLocalStorage("shoppingCart");
    this.totalPrice = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'))
    this.totalPrice += product.price;
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice))
  }


  removeProduct(product: any, price: number, numOfProducts: number) {
    this.shoppingCart = this.shoppingCart.filter(p => p.id != product.id)
    localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart))
    this.totalPrice = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'))
    this.totalPrice -= numOfProducts * price;
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice))
  }

  removeOneProduct(id: string, price: number, numOfProd: number) {
    if (numOfProd > 1) {

      this.shoppingCart = this.persistenceService.loadFromLocalStorage("shoppingCart")
      this.shoppingCart.find((p: { id: string; }) => p.id == id).numberOfProducts -= 1
      localStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart))
      this.totalPrice = parseInt(JSON.parse(localStorage.getItem("totalPrice") ?? '0'))
      this.totalPrice -= price;
      localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice))
    }


  }

  cleanCart() {
    this.persistenceService.clearLocalStorage()
    this.totalPrice = 0;
  }

  loadProduct = (id: string) => this.products.find(product => product.PRODUCT.id == id)

}