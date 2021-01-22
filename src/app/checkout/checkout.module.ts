import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ReceiptInfoComponent } from './receipt-info/receipt-info.component';

import { OrderInfoModule } from './../shared/order-info/order-info.module';
import { CartInfoComponent } from './cart-info/cart-info.component';

@NgModule({
  declarations: [CheckoutComponent, CustomerInfoComponent, PaymentInfoComponent, ReceiptInfoComponent, CartInfoComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    OrderInfoModule,
  ]
})
export class CheckoutModule { }
