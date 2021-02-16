import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrls: ['./category-single.component.sass']
})
export class CategorySingleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public categoryId: number=-1;
  ngOnInit(): void {
    this.categoryId = Number( this.route.snapshot.paramMap.get('id') );
  }

}
