import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySingleComponent } from './pages/category-single/category-single.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category/:id', component: CategorySingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
