import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dummy';

  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(Date.now(), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      image: new FormControl(
        'http://code.slicecrowd.com/labs/4/images/t-shirt.png'
      ),
    });
  }

  productList: Product[] = [
    {
      id: Date.now(),
      name: 'I feel like Pablo',
      price: 120,
      brand: 'Yeezy',
      image: 'http://code.slicecrowd.com/labs/4/images/t-shirt.png',
    },
  ];

  addProduct(newItem: Product) {
    this.productList.push(newItem);
    // console.log(newItem);
  }
}
