import { ProductTypes } from './../models/product-types';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  productTypes = ProductTypes;


  constructor() { }

  ngOnInit() {
  }

}
