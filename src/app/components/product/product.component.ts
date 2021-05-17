import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: product;

  cartObserver: any;

  constructor(private cartService: CartService) {
    this.product = {
      title: 'default title',
      price: 0,
      original_price: 0,
      thumbnail: '',
      id: '',
      discount: 0,
      inCart: false,
    };
  }

  ngOnInit(): void {
    this.product.discount = this.getPercentageChange(
      this.product.original_price || 0,
      this.product.price
    );
    this.getCart();
    this.init();
  }

  ngOnDestroy(): void {
    if (this.cartObserver) {
      this.cartObserver.unsuscribe();
    }
  }

  getPercentageChange(oldNumber: number, newNumber: number) {
    if (oldNumber === 0) {
      return 0;
    }
    var decreaseValue = oldNumber - newNumber;

    return Math.trunc((decreaseValue / oldNumber) * 100);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeToCart() {
    this.cartService.removeToCart(this.product);
  }

  toggleCart() {
    if (this.product.inCart) {
      this.removeToCart();
    } else {
      this.addToCart();
    }
  }

  getCart() {
    this.product.inCart = this.cartService.includes(
      this.cartService.cart,
      this.product
    );
  }

  init() {
    this.cartObserver = this.cartService.cartS.subscribe(() => {
      this.getCart();
    });
  }
}
