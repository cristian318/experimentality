import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  showMenu = false;

  countCart = 0;

  cartObserver: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    if (this.cartObserver) {
      this.cartObserver.unsuscribe();
    }
  }

  setShowMenu(value: boolean) {
    this.showMenu = value;
  }

  init() {
    this.getCountCart(this.cartService.cart);
    this.cartObserver = this.cartService.cartS.subscribe((val) => {
      this.getCountCart(val);
    });
  }

  getCountCart(cart: product[]) {
    this.countCart = cart.length;
  }
}
