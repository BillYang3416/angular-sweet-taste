import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { IProduct } from 'src/app/models/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /** 產品清單 */
  @Input() products: IProduct[];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const type = params.get('type');
          if ('all' === type) {
            return this.productService.getProducts();
          } else {
            return this.productService.getProductsByType(type);
          }
        })
      )
      .subscribe(data => {
        this.products = data;
      });
  }

}
