import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

  products: Array<any> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addProduct(id: string, name:string, price: number, image: string, numOfProd: number ):void {
    this.productsService.addProduct(id, name, price, image, numOfProd);
  }
  
}
