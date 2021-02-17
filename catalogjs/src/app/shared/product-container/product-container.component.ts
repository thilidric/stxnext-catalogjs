import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.sass']
})
export class ProductContainerComponent implements OnInit {

  constructor( public productService: ProductService ) { }

  public productsArraySorted: Product[] = [];
  public hasFetched = false;
  
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( (res) => {
        this.productsArraySorted = res.slice().sort( (a,b) => a.price-b.price );
        this.hasFetched = true;
      })
  }

}
