import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-most-wanted-products',
  templateUrl: './most-wanted-products.component.html',
  styleUrls: ['./most-wanted-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MostWantedProductsComponent implements OnInit {
  products: product[];

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getRandomProducts();
  }

  getRandomProducts(): void {
    // 97 a 122
    const query = String.fromCharCode(this.getRandomInt(97, 122));
    this.productService.searchProducts(query).subscribe(
      (data) => {
        this.products = [];
        if ('results' in data) {
          this.products = data.results;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
