import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  valueInput: string = '';

  constructor(private routerService: RouterService) {}

  ngOnInit(): void {}

  search(): void {
    this.routerService.goto('/search', { q: this.valueInput });
  }
}
