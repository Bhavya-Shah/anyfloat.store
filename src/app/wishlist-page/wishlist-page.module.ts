import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistResolveService } from './services/wishlist-resolve.service';

const routes: Routes=[
  {path: '', component: WishlistComponent, resolve: [WishlistResolveService]}
]; 

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    RouterModule.forChild(routes),   
    CommonModule
  ]
})
export class WishlistPageModule { }
