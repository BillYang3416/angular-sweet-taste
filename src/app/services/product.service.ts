import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProduct } from './../models/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  /** 取得產品清單 */
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl);
  }

  /**
   * 根據產品類別取得產品清單
   *
   * @param type 產品類別
   */
  getProductsByType(type: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl)
      .pipe(
        map(products => products.filter(item => item.type === type))
      );
  }

}

