import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Data } from './category'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private http: HttpClient ) { }

  private categoriesURL: string = "https://gorest.co.in/public-api/categories";

  getCategories(): Observable<Category[]> {
    return this.http.get<Data>(this.categoriesURL, { observe:"body" })
      .pipe( map( (res) => res.data) )
  }
}
