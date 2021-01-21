import { PRODUCT_TYPES } from './../models/product-types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  /** 產品類別 */
  productTypes = PRODUCT_TYPES;

  constructor() { }

  ngOnInit() {
  }

}
