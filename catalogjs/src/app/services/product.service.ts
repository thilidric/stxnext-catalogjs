import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(
    private apiService: ApiService 
  ) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.getAllPages("/products")
  }

}