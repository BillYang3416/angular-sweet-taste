import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnChanges {

  /** 小計 */
  @Input() subTotal: number;

  /** 運費 */
  shippingPrice = 0;

  /** 總金額 */
  totalPrice = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalPrice = this.subTotal + this.shippingPrice;
  }

}
