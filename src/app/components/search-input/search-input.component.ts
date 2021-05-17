import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  valueInput: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  search(): void {
    console.log('search:', this.valueInput);
    this.productService.searchProducts(this.valueInput, 'MCO1430').subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err, 'error :(');
      }
    );
  }
}
