import { Component, ViewEncapsulation, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
