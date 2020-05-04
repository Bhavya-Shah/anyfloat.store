import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./catalog-page/catalog-page.module').then(m=>m.CatalogPageModule)},
  {path: 'details', loadChildren: ()=> import('./details-page/details-page.module').then(m=>m.DetailsPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
