import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  title:string = "Cart"
  user: any

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onSubmit(user: NgForm){
    if(user.valid)
    {
      this.user = user.value
      this.cartService.setUser(this.user)
      this.router.navigate(['/checkout'])
    }
    else{
      console.log("User Details are inncorrect!")
    }
  }

}
