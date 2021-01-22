import { Component, OnInit } from '@angular/core';

import { appPath } from './../app-path.const';
import { CartService } from './../services/cart.service';
import { ICartDetail } from './../models/cart-detail-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  /** 購物車清單 */
  cartDetails: ICartDetail[] = [];

  /** 小計 */
  subTotal: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.setInit();
  }

  /**
   * 處理產品數量改變事件
   * @param event 改變的數量
   * @param detail 購物車明細
   */
  handleAmount(event: number, detail: ICartDetail) {
    const difference = event - detail.amount;
    if (difference > 0) {
      for (let i = 0; i < difference; i++) {
        this.cartService.addItemByName(detail.name);
      }
    } else if (difference < 0) {
      for (let i = 0; i < -difference; i++) {
        this.cartService.removeItemByName(detail.name);
      }
    }

    this.setInit();
  }

  /** 初始化 */
  private setInit() {
    this.cartDetails = this.cartService.getCartDetails();
    this.subTotal = this.cartService.getSubTotal();
  }

}
