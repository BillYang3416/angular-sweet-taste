import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICartDetail } from 'src/app/models/cart-detail-interface';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  /** 產品明細 */
  @Input() detail: ICartDetail;

  @Output() amountChange = new EventEmitter<number>();

  /** 數量 */
  amount: number;

  constructor() { }

  ngOnInit() {
    this.amount = this.detail.amount;
  }

  /** 產品數量變化 */
  onAmountChange() {
    this.amountChange.emit(this.amount);
  }

  /** 新增產品數量 */
  addAmount() {
    this.amount++;
    this.onAmountChange();
  }

  /** 減少產品數量 */
  removeAmount() {
    this.amount--;
    this.onAmountChange();
  }

  /** 移除產品明細(視為數量為零) */
  deleteCartDetail() {
    this.amount = 0;
    this.onAmountChange();
  }

}
