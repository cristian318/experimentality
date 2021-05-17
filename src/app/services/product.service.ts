import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService: HttpServiceService) {}

  test() {
    const data: any = {
      category: 'MCO1430',
      q: 'nike',
    };
    return this.httpService.makeGet('/sites/MCO/search', data);
  }
}
