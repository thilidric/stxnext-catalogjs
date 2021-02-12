import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.sass']
})
export class CategoryContainerComponent implements OnInit {

  constructor( public categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
  }

}
