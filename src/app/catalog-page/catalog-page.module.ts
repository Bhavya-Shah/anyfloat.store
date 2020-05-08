import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './components/catalog/catalog.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookItemComponent } from './components/book-list/book-item/book-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-list/movie-item/movie-item.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
];

@NgModule({
  declarations: [
    CatalogComponent, 
    MovieItemComponent, 
    MovieListComponent,
    BookItemComponent,
    BookListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  // bootstrap:[CatalogComponent],
  // providers: [CartService]
})

export class CatalogPageModule{
}
