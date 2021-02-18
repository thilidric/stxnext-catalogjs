import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.sass']
})
export class ProductContainerComponent implements OnInit {

  constructor( 
    public productService: ProductService,
    public router: Router
  ) { }

  public productsArraySorted: Product[] = [];
  public hasFetched = false;
  
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( (res) => {
        this.productsArraySorted = res.slice().sort( (a,b) => a.price-b.price );
        this.hasFetched = true;
      })
  }

  onProductSelect(product: Product): void {
    this.router.navigate(['/product', product.id])
  }

}
