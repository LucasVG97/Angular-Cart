import { Component, OnInit} from '@angular/core';

import { ProductsService } from '../products/products.service';

import { PersistenceService } from 'src/app/shared/persistence.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Array<any> = this.persistenceService.loadFromLocalStorage("shoppingCart");
  totalPrice: number = 0;

  constructor(
    private productsService: ProductsService, private persistenceService: PersistenceService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.shoppingCart = this.persistenceService.loadFromLocalStorage("shoppingCart");
    this.totalPrice = this.productsService.totalPrice
  }

  removeProduct(product: any, price: number, numOfProd: number){
    this.productsService.removeProduct(product, price, numOfProd)
  }

  cleanCart(){
    this.productsService.cleanCart()
  }

  addProduct(id: string, name:string, price: number, image: string, numOfProd: number ):void {
    this.productsService.addProduct(id, name, price, image, numOfProd);
  }

  removeOneProduct(id: string, price: number, numOfProd: number){
    this.productsService.removeOneProduct(id, price, numOfProd);
  }
}
