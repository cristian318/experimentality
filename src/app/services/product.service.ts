import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService: HttpServiceService) {}

  searchProducts(query: string, category: string = '') {
    const params: any = {
      category,
      q: query,
    };
    return this.httpService.makeGet('/sites/MCO/search', params);
  }
}
