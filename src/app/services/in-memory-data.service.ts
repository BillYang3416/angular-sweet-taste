import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const products = [
      {
        type: 'today',
        name: '焦糖馬卡龍',
        price: 450
      },
      {
        type: 'popular',
        name: '巧克力熔炎',
        price: 400
      },
      {
        type: 'new',
        name: '提拉米蘇',
        price: 350
      },
      {
        type: 'today',
        name: '焦糖馬卡龍',
        price: 450
      },
      {
        type: 'popular',
        name: '巧克力熔炎',
        price: 400
      },
      {
        type: 'new',
        name: '提拉米蘇',
        price: 350
      },
    ];
    return { products };
  }
}
