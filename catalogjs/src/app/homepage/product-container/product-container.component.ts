import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.sass']
})
export class ProductContainerComponent implements OnInit {

  constructor( public productService: ProductService ) { }

  ngOnInit(): void {
  }

}
