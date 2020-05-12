import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { MovieCartComponent } from './component/movie-cart/movie-cart.component';
import { BookCartComponent } from './component/book-cart/book-cart.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: CartComponent}
];

@NgModule({
  declarations: [CartComponent,
    MovieCartComponent,
    BookCartComponent],
  
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class CartPageModule { }
