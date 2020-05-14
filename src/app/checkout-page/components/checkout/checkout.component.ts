import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  title: string = "Checkout"
  user: any
  books: Book[] = []
  movies: Movie[] = []
  totalAmount: number = 0

  constructor(private cartService: CartService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit(): void {  
    this.user = this.cartService.getUser()
    this.books = this.cartService.getBookCartItems()
    this.movies = this.cartService.getMovieCartItems()
    this.totalAmount = this.cartService.calculatePrice()
  }

  checkout(otp: number){
    this.alertService.clear()
    if(otp == 778899){
      this.alertService.success('Successful', true)
      setTimeout(() => {
        this.alertService.end('Successful', false)
      }, 3000);
      setTimeout(()=>{
        this.router.navigate(['/'])
      }, 3000)
    }
    else{
      this.alertService.error('Incorrect OTP', true)
      setTimeout(() => {
        this.alertService.end('Incorrect OTP', false)
      }, 1000);
    }   
  }
}
