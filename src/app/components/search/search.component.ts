import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  valueInput: string = '';

  products: product[];

  constructor(
    private productService: ProductService,
    private routerService: RouterService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.init();
  }

  search(): void {
    this.productService.searchProducts(this.valueInput, 'MCO1430').subscribe(
      (data) => {
        console.log(data);
        this.products = [];
        if ('results' in data) {
          this.products = data.results;
        }
      },
      (err) => {
        console.log(err, 'error :(');
      }
    );
  }

  init() {
    this.routerService.getParams().subscribe((params) => {
      if ('q' in params) {
        this.valueInput = params.q;
        this.search();
      }
    });
  }
}
