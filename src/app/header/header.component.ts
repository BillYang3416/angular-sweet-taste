import { Component, OnInit } from '@angular/core';

import { MENUS } from '../models/menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /** 選單 */
  menus = MENUS;

  /** 首頁路徑 */
  homePath = MENUS[0].path;

  constructor() { }

  ngOnInit() {
  }

}
