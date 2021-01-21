import { Component, OnInit } from '@angular/core';

import { menus } from './../models/menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /** 選單 */
  menus = menus;

  homePath = menus[0].path;

  constructor() { }

  ngOnInit() {
  }

}
