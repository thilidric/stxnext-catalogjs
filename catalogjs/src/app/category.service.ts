import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Data } from './category'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient ) { }

  private categoriesURL: string = "https://gorest.co.in/public-api/categories";
  private pageCount: number = 1;
  private pageLimit: number = 1;
  public categoriesArray: Category[] = [];

  getCategories(): void{

    this.http.get<Data>(this.categoriesURL+`?page=${this.pageCount}`, { observe:"body" }).pipe(
      tap( (res) => { this._fetchNextPage(res) } )
    )
    .subscribe( (res) => {
      this.categoriesArray = [...this.categoriesArray, ...res.data];
    } )
  }

  _fetchNextPage(res: Data):void{
    this.pageLimit = res.meta.pagination.pages;
    this.pageCount++
    if( this.pageCount <= this.pageLimit ) this.getCategories()
  }
}