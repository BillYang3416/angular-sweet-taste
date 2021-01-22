import { Component, Input, OnInit } from '@angular/core';
import { ICartDetail } from 'src/app/models/cart-detail-interface';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {

  /** 單筆購物明細 */
  @Input() item: ICartDetail;

  constructor() { }

  ngOnInit() {
  }

}
