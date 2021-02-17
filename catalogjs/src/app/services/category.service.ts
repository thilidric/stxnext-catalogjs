import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor( 
    private apiService: ApiService 
  ) { }

  getCategories(): Observable<Category[]> {
    return this.apiService.getAllPages("/categories")
  }

}