import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './checkout-page/services/auth-guard.service';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./catalog-page/catalog-page.module').then(m=>m.CatalogPageModule)},
  {path: 'details', loadChildren: ()=> import('./details-page/details-page.module').then(m=>m.DetailsPageModule)},
  {path: 'wishlist', loadChildren:()=> import('./wishlist-page/wishlist-page.module').then(m=>m.WishlistPageModule)},
  {path: 'cart', loadChildren: ()=> import('./cart-page/cart-page.module').then(m=>m.CartPageModule)},
  {path: 'checkout', loadChildren: ()=>import('./checkout-page/checkout-page.module').then(m=>m.CheckoutPageModule), canActivate: [AuthGuardService]},
  {path: '404', loadChildren: ()=>import('./not-found-page/not-found-page.module').then(m=>m.NotFoundPageModule)},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
