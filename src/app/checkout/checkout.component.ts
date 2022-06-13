import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GamesService } from '../game-list/games.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private productsService: ProductsService, 
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
        this.snackBar.open("Successful purchase",'', {duration: 4000} );
        setTimeout(() => {this.router.navigate([''])}, 1500);
        this.productsService.cleanCart();
      }
}
