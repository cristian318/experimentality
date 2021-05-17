import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: product;

  constructor() {
    this.product = {
      title: 'default title',
      price: 0,
      original_price: 0,
      thumbnail: '',
      id: '',
      discount: 0,
    };
  }

  ngOnInit(): void {
    this.product.discount = this.getPercentageChange(
      this.product.original_price || 0,
      this.product.price
    );
  }

  getPercentageChange(oldNumber: number, newNumber: number) {
    if (oldNumber === 0) {
      return 0;
    }
    var decreaseValue = oldNumber - newNumber;

    return Math.trunc((decreaseValue / oldNumber) * 100);
  }
}
