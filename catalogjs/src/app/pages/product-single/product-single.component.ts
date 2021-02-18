import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.sass']
})
export class ProductSingleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService
  ) { }

  public productId: number = -1;
  public product!: Product;
  public hasFetched: boolean = false;

  ngOnInit(): void {
    this.productId = Number( this.route.snapshot.paramMap.get('id') );
    this.fetchProduct();
  }

  fetchProduct(): void{
    this.productService.getProduct( this.productId )
    .subscribe( (res: any) => {
      this.product = res.data;
      this.hasFetched = true;
    })
  }

}
