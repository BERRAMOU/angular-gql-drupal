import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { TaxonomyListComponent } from './components/taxonomy-list/taxonomy-list.component';

const routes: Routes = [
   {path: '', component: TaxonomyListComponent},
  { path: 'terms-list', component: TaxonomyListComponent },
  { path: 'node/:id', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
