import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productData: Observable<Product[]>

  constructor(
    private apiService: ApiService 
  ) { 
    this.productData = this.apiService.getAllPages("/products")
  }

  getProducts(): Observable<Product[]> {
    return this.productData
  }

}