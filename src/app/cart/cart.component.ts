import { Component, OnInit } from '@angular/core';

import { appPath } from './../app-path.const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
