import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';
import { CartService } from 'src/app/cart-page/services/cart.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {
  
  outOfStock: boolean = false
  @Input() movie: Movie

  constructor(private wishlistService: WishlistService, private cartService: CartService) { }

  ngOnInit(): void {
    if (this.movie.quantity == 0) {
      this.outOfStock = true
    }
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
      this.outOfStock = true
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
}

  addToWishlist(movie: Movie){
    let movieWishlist = this.wishlistService.getMovieWishlist()

    if(!movieWishlist.some((item)=>item.id == movie.id)){
      this.wishlistService.setMovieWishlist(movie)
      console.log("Item added into wishlist!")
    }
    else{
      console.log("Item Exists in wishlist!")
    }  
  }
}


