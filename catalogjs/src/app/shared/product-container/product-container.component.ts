import { Component, Input, OnInit } from '@angular/core';
import { Product, CategoryShort } from 'src/app/interfaces/product';
import { Category, Data } from 'src/app/interfaces/category';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.sass']
})
export class ProductContainerComponent implements OnInit {

  @Input() limit!: number;
  @Input() categoryID!: number;

  constructor( 
    public productService: ProductService,
    public categoryService: CategoryService
  ) { }
  
  public categoryName: string = ""
  public productsArraySorted: Product[] = [];
  public hasFetched = false;

  public page: number = 1;
  public pageSize: number = 20;
  public collectionSize: number = 0;
  
  ngOnInit(): void {
    this.fetchProducts()
    this.fetchCategoryName()
  }
  
  fetchProducts(): void{
    this.productService.getProducts()
    .subscribe( (res: Product[]) => {
      this.productsArraySorted = res.slice().sort( (a,b) => a.price-b.price );
      this.productsArraySorted = this.filterByCategory( this.productsArraySorted )
      this.setPaginationProps( this.productsArraySorted )
      
      this.hasFetched = true;
    })
  }

  fetchCategoryName(): void{
    if(this.categoryID){
      this.categoryService.getCategories()
      .subscribe( (res: Category[]) => {
        this.categoryName = res.find( ( category ) => category.id === this.categoryID )!.name
      } )
    }
  }

  filterByCategory( array: Product[] ): Product[] {
    if( this.categoryID ) {
      array = array.filter( item => this._categoryCheck(item) )
    }
    return array
  }

  _categoryCheck(item: Product){
    let returnFlag = false
    item.categories.forEach( (category: CategoryShort) => {
      if( category.id === this.categoryID ) returnFlag = true;
    } )
    return returnFlag
  }

  setPaginationProps(array: any[]){
    this.pageSize = this.limit
    this.collectionSize= array.length;
  }

  onPagination(e: any){
    setTimeout(()=>window.scroll(0,0)); // Timeout for last page scroll fix
  }
}
