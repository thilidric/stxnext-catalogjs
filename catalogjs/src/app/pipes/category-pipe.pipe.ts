import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(items: Product[], categoryId:number ): Product[] {
    
    if (!items || !categoryId) {
      return items;
    }

    return items.filter(item => {
      let returnFlag = false;
      item.categories.forEach( (category) => {
        if ( category.id === categoryId ) returnFlag = true;
      } )
      return returnFlag;
    })

  }

}
