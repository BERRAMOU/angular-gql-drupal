import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

// Apollo
import {GraphQLModule} from './graphql.module';
import { TaxonomyListComponent } from './components/taxonomy-list/taxonomy-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticleComponent } from './components/article/article.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    GraphQLModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TaxonomyListComponent,
    MenuComponent,
    ArticleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
