import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Data } from './product'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient ) { }

  private productsURL: string = "https://gorest.co.in/public-api/products";
  private pageCount: number = 1;
  private pageLimit: number = 1;
  public productsArray: Product[] = [];

  getProducts(): void{
    this.http.get<Data>(this.productsURL+`?page=${this.pageCount}`, { observe:"body" }).pipe(
      tap( (res) => { this._fetchNextPage(res) } )
    )
    .subscribe( (res) => {
      this.productsArray = [...this.productsArray, ...res.data];
    } )
  }

  _fetchNextPage(res: Data):void{
    this.pageLimit = res.meta.pagination.pages;
    this.pageCount++
    if( this.pageCount <= this.pageLimit ) this.getProducts()
  }
}