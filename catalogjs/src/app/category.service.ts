import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Data } from './category'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient ) { }

  private pageCount: number = 1;
  private pageLimit: number = 1;
  public categoriesArray: Category[] = [];
  public categoriesArrayShuffled: Category[] = [];
  public hasFetched: boolean = false;

  getCategories(): void{
    this.http.get<Data>(environment.apiUrl+`/categories?page=${this.pageCount}`, { observe:"body" })
      .subscribe( (res) => {
        this.categoriesArray = [...this.categoriesArray, ...res.data];
        this._fetchNextPage(res) 
      } )
  }

  _fetchNextPage(res: Data):void{
    this.pageLimit = res.meta.pagination.pages;
    this.pageCount++
    if( this.pageCount <= this.pageLimit ) this.getCategories()
    else this._finishFetch()
  }

  _finishFetch(){
    this.categoriesArrayShuffled = this.categoriesArray.slice();
    this.shuffleArray( this.categoriesArrayShuffled );
    this.hasFetched = true;
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}