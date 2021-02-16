import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product, Data } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient ) { }

  private pageCount: number = 1;
  private pageLimit: number = 1;
  public productsArray: Product[] = [];
  public productsArraySorted:Product[] = [];
  public hasFetched: boolean = false;

  getProducts(): void{
    this.http.get<Data>(environment.apiUrl+`/products?page=${this.pageCount}`, { observe:"body" })
      .subscribe( (res) => {
        this.productsArray = [...this.productsArray, ...res.data];
        this._fetchNextPage(res);
      } )
  }

  _fetchNextPage(res: Data):void{
    this.pageLimit = res.meta.pagination.pages;
    this.pageCount++
    if( this.pageCount <= this.pageLimit ) this.getProducts();
    else this._finishFetch();
  }

  _finishFetch(){
    this.productsArraySorted = this.productsArray.slice().sort( (a,b) => a.price - b.price );
    this.hasFetched = true;
  }
}