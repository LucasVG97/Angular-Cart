import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products/products.service';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { PersistenceService } from './shared/persistence.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'shopping-cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    HeaderComponent,
    MenuComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService,
    PersistenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
