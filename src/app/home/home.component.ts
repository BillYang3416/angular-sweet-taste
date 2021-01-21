import { Component, OnInit } from '@angular/core';

import { appPath } from '../app-path.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** 路由定義 */
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
