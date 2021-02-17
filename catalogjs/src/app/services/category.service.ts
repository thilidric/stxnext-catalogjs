import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private categoryData: Observable<Category[]>

  constructor( 
    private apiService: ApiService 
  ) { 
    this.categoryData = this.apiService.getAllPages("/categories")
  }

  getCategories(): Observable<Category[]> {
    return this.categoryData;
  }

}