import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StaticContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
