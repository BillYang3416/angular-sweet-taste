import { Component, OnInit } from '@angular/core';

import { CartService } from './../services/cart.service';
import { ICartDetail } from '../models/cart-detail-interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  /** 小計 */
  subTotal: number;

  /** 購物明細 */
  cartList: ICartDetail[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subTotal = this.cartService.getSubTotal();
    this.cartList = this.cartService.getCartDetails();
  }

}
