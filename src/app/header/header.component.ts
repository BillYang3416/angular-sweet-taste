import { Component, OnInit } from '@angular/core';

import { appPath } from '../app-path.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
