import { Component, Input, OnInit } from '@angular/core';

import { appPath } from 'src/app/app-path.const';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
