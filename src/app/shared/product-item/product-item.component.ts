import { CartService } from './../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

import { appPath } from 'src/app/app-path.const';
import { IProduct } from 'src/app/models/product-interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  /** 產品 */
  @Input() item: IProduct;

  /** 產品類別 */
  typeList = {
    new: '新品上市',
    today: '本日精選',
    popular: '人氣推薦'
  };

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  /** 加入購物車 */
  addToCart(item: IProduct) {
    alert(`${item.name} 已被加入購物車`);
    this.cartService.addItemToCart(item);
  }

}
