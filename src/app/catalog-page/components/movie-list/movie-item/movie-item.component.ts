import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {
  
  outOfStock: boolean = false
  @Input() movie: Movie

  constructor(private wishlistService: WishlistService, 
              private cartService: CartService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    if (this.movie.quantity == 0) {
      this.outOfStock = true
    }
  }

addToCart(movie: Movie) {
  this.alertService.clear()
  let movieCartItems = this.cartService.getMovieCartItems()
  if(movieCartItems.some((item)=> item.id == movie.id)){
    if(movie.quantity>0){
      this.cartService.removeFromMovieCart(movie)
      this.cartService.setMovieCount(movie.count+1)
      this.cartService.setMovieQuantity(movie.quantity-1)
      movie.count = this.cartService.getMovieCount()
      movie.quantity = this.cartService.getMovieQuantity()
      this.cartService.setMovieCartItems(movie)
      this.alertService.success('Movie added into cart', true)
      setTimeout(()=>{
        this.alertService.end('Movie added into cart',  false)
      }, 1000)
    }
    else{
      this.outOfStock = true
      this.alertService.error('Movie exists in cart', true)
      setTimeout( ()=>{
        this.alertService.end('Movie exists in cart',false)
      }
      , 1000)
    }
  }
  else{
    if(movie.quantity>0){
      movie.count = this.cartService.setMovieCount(movie.count+1)
      movie.quantity = this.cartService.setMovieQuantity(movie.quantity-1)
      this.cartService.setMovieCartItems(movie)
      this.alertService.success('Movie added into cart', true)
      setTimeout( ()=>{
        this.alertService.end('Movie added into cart',false)
      }
      , 1000)
    }
    else{
      this.alertService.error('Out of stock', true)
      setTimeout( ()=>{
        this.alertService.end('Out of stock',false)
      }
      , 1000)    }
  }
}

  addToWishlist(movie: Movie){
    this.alertService.clear()
    let movieWishlist = this.wishlistService.getMovieWishlist()

    if(!movieWishlist.some((item)=>item.id == movie.id)){
      this.wishlistService.setMovieWishlist(movie)
      this.alertService.success('Movie added into wishlist', true)
      setTimeout(()=>{
        this.alertService.end('Movie added into wishlist', false)
      }, 1000)
    }
    else{
      this.alertService.error('Movie exists in wihslist', true)
      setTimeout(()=>{
      this.alertService.end('Movie exists in wihslist', false)
      }, 1000)
    }  
  }
}


