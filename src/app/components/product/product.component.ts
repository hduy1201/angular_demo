import { Component, Input } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor() {}

  @Input('productList')
  productList!: Product[];
}
