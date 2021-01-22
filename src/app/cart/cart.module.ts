import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { OrderInfoModule } from './../shared/order-info/order-info.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, CartDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule,
    OrderInfoModule,
  ]
})
export class CartModule { }
