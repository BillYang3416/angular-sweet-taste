import { Component, OnInit } from '@angular/core';

import { appPath } from '../app-path.const';

import { PRODUCT_TYPES } from './../models/product-types';
import { IProduct } from '../models/product-interface';
import { ProductService } from '../services/product.service';

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

  /** 產品清單 */
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(
        data => {
          this.products = data.slice(0, 3);
        }
      );
  }

}
