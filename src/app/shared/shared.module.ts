import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [];

@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports:[ 
      HeaderComponent
  ]
})

export class SharedModule{
 }
