import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { 
    const productId = this.route.snapshot.params["id"];
    this.product = productsService.loadProduct(productId);
  }

  ngOnInit(): void {
  }

  
  addProduct(id: string, name:string, price: number, image: string, numOfProd: number ):void {
    this.productsService.addProduct(id, name, price, image, numOfProd);
  }

  
}
