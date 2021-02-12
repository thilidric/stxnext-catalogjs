import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
