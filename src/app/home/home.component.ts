import { Component, OnInit } from '@angular/core';

import { appPath } from '../app-path.const';
import { products } from './../models/products';
import { PRODUCT_TYPES } from './../models/product-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  /** 產品類別 */
  productTypes = PRODUCT_TYPES.slice(1, 4);


  products = products;

  constructor() { }

  ngOnInit() {
  }

}
