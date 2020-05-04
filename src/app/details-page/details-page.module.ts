import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { BookResolverService } from '../catalog-page/services/book-resolve.service';
import { MovieResolverService } from '../catalog-page/services/movie-resolve.service';

const routes: Routes=[
    {path: 'book/:id', component: DetailsComponent, resolve: [BookResolverService]},
    {path: 'movie/:id', component: DetailsComponent, resolve: [MovieResolverService]}
  ];

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    RouterModule.forChild(routes),   
    CommonModule
  ],
  exports: []
})
export class DetailsPageModule { }
