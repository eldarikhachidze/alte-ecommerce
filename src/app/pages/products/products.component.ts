import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../core/services";
import {Product} from "../../core/interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  categoryId?: number
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    const params = {
      categoryId: this.categoryId
    }
    this.productService.getProducts(params)
      .pipe()
      .subscribe(res => {
      this.products = res
    })
  }

}
