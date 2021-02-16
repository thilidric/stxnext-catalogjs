import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.sass']
})
export class CategoryContainerComponent implements OnInit {

  constructor( public categoryService: CategoryService ) { }

  public categoriesArrayShuffled: Category[] = [];
  public hasFetched = false;

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe( (res) => {
        this.categoriesArrayShuffled = res.slice();
        this.shuffleArray(this.categoriesArrayShuffled);
        this.hasFetched = true;
      })
  }

  shuffleArray(array: Category[]) :void{
    for ( let i = array.length - 1; i > 0; i-- ) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

}
