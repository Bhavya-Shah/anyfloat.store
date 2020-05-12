import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { WishlistService } from '../../services/wishlist.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-movie-wishlist',
  templateUrl: './movie-wishlist.component.html',
  styleUrls: ['./movie-wishlist.component.sass']
})
export class MovieWishlistComponent implements OnInit {

  movieWishlist: Movie[]
  constructor(private wishlistService: WishlistService,
              private router: Router,
              private cartService: CartService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.movieWishlist = this.wishlistService.getMovieWishlist()
    if(this.movieWishlist.length==0)
      this.movieWishlist = JSON.parse(localStorage.getItem("MovieWishlist"))
    this.wishlistService.setMovieWishlistFromLocalStorage(this.movieWishlist)
  }

  addToCart(movie: Movie) {
    let movieCartItems = this.cartService.getMovieCartItems()
    if(movieCartItems.some((item)=> item.id == movie.id)){
      if(movie.quantity>0){
      this.cartService.removeFromMovieCart(movie)
      this.cartService.setMovieCount(movie.count+1)
      this.cartService.setMovieQuantity(movie.quantity-1)
      movie.count = this.cartService.getMovieCount()
      movie.quantity = this.cartService.getMovieQuantity()
      this.cartService.setMovieCartItems(movie)
      }
      else{
        console.log("item exists in cart but its quantity is zero", movie.quantity)
      }
    }
    else{
      if(movie.quantity>0){
        movie.count = this.cartService.setMovieCount(movie.count+1)
        movie.quantity = this.cartService.setMovieQuantity(movie.quantity-1)
        this.cartService.setMovieCartItems(movie)
      }
      else{
        console.log("item doesnt exsit in cart and its quantity is zero so we cant add it", movie.quantity)
      }
    }
    this.router.navigate(['/cart'])
  }
  
  removeItem(movie: Movie) {
    this.alertService.clear()
    this.movieWishlist = this.wishlistService.removeFromMovieWishlist(movie)
    this.alertService.success('Movie removed from wishlist', true)
    setTimeout(() => {
      this.alertService.end('Movie removed from wishlist', false)
    }, 1000);
  }
}
