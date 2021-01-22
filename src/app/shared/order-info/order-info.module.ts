import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderInfoComponent } from './order-info.component';


@NgModule({
  declarations: [OrderInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OrderInfoComponent
  ]
})
export class OrderInfoModule { }
