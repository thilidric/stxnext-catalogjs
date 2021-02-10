import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Data } from './product'
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient ) { }

  private pageCount: number = 1;
  private pageLimit: number = 1;
  public productsArray: Product[] = [];
  public productsArraySorted:Product[] = [];

  getProducts(): void{
    this.http.get<Data>(environment.apiUrl+`/products?page=${this.pageCount}`, { observe:"body" }).pipe(
      tap( (res) => { this._fetchNextPage(res) } )
    )
    .subscribe( (res) => {
      this.productsArray = [...this.productsArray, ...res.data];
      this.productsArraySorted = this.productsArray.sort( (a,b) => a.price - b.price )
    } )
  }

  _fetchNextPage(res: Data):void{
    this.pageLimit = res.meta.pagination.pages;
    this.pageCount++
    if( this.pageCount <= this.pageLimit ) this.getProducts()
  }
}