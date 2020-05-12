
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/models/book.model';
import { Movie } from 'src/app/shared/models/movie.model';


@Injectable()
export class AuthGuardService implements CanActivate {
  someCondition: true
  userObj: any
  book: Book[]
  movie: Movie[]

    constructor(private router:Router,
                private cartService: CartService ) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | UrlTree {

        this.userObj = this.cartService.getUser()
        this.book = this.cartService.getBookCartItems()
        this.movie = this.cartService.getMovieCartItems()

        if(this.userObj != null && (this.book.length!=0 || this.movie.length != 0)){
          return true
        }
        else{
          console.log("Cart is Empty!")
          return this.router.parseUrl('')
        }
    }

}
