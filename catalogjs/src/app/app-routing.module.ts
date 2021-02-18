import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'product/:id', component: ProductSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
