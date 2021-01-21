import { Component, OnInit } from '@angular/core';

import { appPath } from './../app-path.const';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
