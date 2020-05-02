import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CatalogComponent } from './catalog-page/components/catalog/catalog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookListComponent } from './catalog-page/components/book-list/book-list.component';
import { BookItemComponent } from './catalog-page/components/book-list/book-item/book-item.component';
import { MovieListComponent } from './catalog-page/components/movie-list/movie-list.component';
import { MovieItemComponent } from './catalog-page/components/movie-list/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    BookListComponent,
    BookItemComponent,
    MovieListComponent,
    MovieItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
