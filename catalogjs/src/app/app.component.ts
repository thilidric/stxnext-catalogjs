import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'catalogjs';

  constructor(private productService: ProductService, private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe();
    this.categoryService.getCategories().subscribe();
  }
}
