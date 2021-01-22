import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/models/product-interface';
import { ICartDetail } from '../models/cart-detail-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /** 產品清單 */
  items: IProduct[] = [];

  /** 小計 */
  subTotal: number;

  /** 產品名稱(唯一) */
  itemNameSets = new Set<string>();

  constructor() { }

  /**
   * 加入產品至購物車
   * @param product 產品
   */
  addItemToCart(product: IProduct) {
    this.items.push(product);
  }

  /**
   * 根據產品名稱增加產品數量
   * @param itemName 產品名稱
   */
  addItemByName(itemName: string) {
    const searchItem = this.items.find(item => item.name === itemName);
    this.items.push(searchItem);
  }

  /**
   * 根據產品名稱減少產品數量
   * @param itemName 產品名稱
   */
  removeItemByName(itemName: string) {
    const removeIndex = this.items.findIndex(item => item.name === itemName);
    this.items.splice(removeIndex, 1);
  }

  /** 取得購物車清單 */
  getCartDetails(): ICartDetail[] {
    const cartDetails: ICartDetail[] = [];
    this.subTotal = 0;
    this.itemNameSets.clear();

    if (this.items.length > 0) {
      this.items.forEach(item => this.itemNameSets.add(item.name));

      this.itemNameSets.forEach(itemName => {
        let amount = 0;
        let price: number;
        let totalPrice = 0;

        this.items.forEach(item => {
          if (item.name === itemName) {
            price = item.price;
            amount++;
            totalPrice += item.price;
          }
        });
        cartDetails.push({ name: itemName, price, amount, totalPrice });
        this.subTotal += totalPrice;
      });
    }

    return cartDetails;
  }

  /** 取得小計   */
  getSubTotal(): number {
    return this.subTotal;
  }
}
