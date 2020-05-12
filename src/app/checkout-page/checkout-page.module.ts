import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';

const routes:Routes = [
  // {path: '', component: CheckoutComponent, canActivate: [AuthGuardService]},
  {path: '', component: CheckoutComponent},

]

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class CheckoutPageModule { }
