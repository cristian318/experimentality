import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: product[];

  cartS: Subject<product[]>;

  constructor() {
    this.cart = this.getLS('cart');
    this.cartS = new Subject();
  }

  getCart() {
    return this.cart;
  }

  setCartS(cart: product[]) {
    this.cartS.next(cart);
  }

  addToCart(product: product) {
    if (!this.includes(this.cart, product)) {
      this.cart.push(product);
    }
    this.setLS('cart', this.cart);
    this.setCartS(this.cart);
  }

  removeToCart(product: product) {
    const p = this.getProduct(this.cart, product);
    if (p !== null) {
      this.cart = this.cart.filter((val) => {
        return val !== p;
      });
      this.setLS('cart', this.cart);
      this.setCartS(this.cart);
    }
  }

  setLS(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLS(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  includes(cart: product[], product: product) {
    return this.getProduct(cart, product) !== null;
  }

  getProduct(cart: product[], product: product): null | product {
    let include = null;
    cart.forEach((x) => {
      if (x.id === product.id) {
        include = x;
      }
    });
    return include;
  }
}
