import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  title:string = "Cart"
  user: Object

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(user: NgForm){
    if(user.valid)
    {
      this.user = user.value
      localStorage.setItem("userDetails",JSON.stringify(this.user))
      //checkoutservice me store user in a variable of type ngForm
      // also store in local variable
      this.router.navigate(['/checkout'])
    }
    else{
      console.log("something went wrong!")
    }
  }

}
