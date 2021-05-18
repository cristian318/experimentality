import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: product[] = [];

  total = 0;

  @Input() show: boolean;

  @Output() closeEvent = new EventEmitter<boolean>();

  cartObserver: any;

  constructor(private cartService: CartService) {
    this.show = false;
  }

  ngOnInit(): void {
    this.setProducts();
    this.init();
  }

  ngOnDestroy(): void {
    if (this.cartObserver) {
      this.cartObserver.unsubscribe();
    }
  }

  close() {
    this.closeEvent.emit(false);
  }

  setProducts() {
    this.products = this.cartService.getCart();
    this.total = 0;
    this.products.forEach((x) => {
      this.total += x.price;
    });
  }

  init() {
    this.cartObserver = this.cartService.cartS.subscribe(() => {
      this.setProducts();
    });
  }

  delete(product: product) {
    this.cartService.removeToCart(product);
  }
}
