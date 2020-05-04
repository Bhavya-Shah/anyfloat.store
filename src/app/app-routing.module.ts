import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./catalog-page/catalog-page.module').then(m=>m.CatalogPageModule)},
  {path: 'details', loadChildren: ()=> import('./details-page/details-page.module').then(m=>m.DetailsPageModule)},
  {path: 'wishlist', loadChildren:()=> import('./wishlist-page/wishlist-page.module').then(m=>m.WishlistPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
