import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookWishlistComponent } from './components/book-wishlist/book-wishlist.component';
import { MovieWishlistComponent } from './components/movie-wishlist/movie-wishlist.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes=[
  {path: '', component: WishlistComponent}
]; 

@NgModule({
  declarations: [WishlistComponent, 
  BookWishlistComponent, 
  MovieWishlistComponent],

  imports: [
    RouterModule.forChild(routes),   
    CommonModule,
    SharedModule
  ]
})
export class WishlistPageModule { }
