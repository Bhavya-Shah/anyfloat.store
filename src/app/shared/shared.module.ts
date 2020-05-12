import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';

const routes: Routes = [];

@NgModule({
  declarations: [
      HeaderComponent,
      AlertComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports:[ 
      HeaderComponent,
      AlertComponent
  ]
})

export class SharedModule{
 }
