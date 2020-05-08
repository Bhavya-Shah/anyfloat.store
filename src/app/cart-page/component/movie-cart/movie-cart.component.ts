import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.sass']
})
export class MovieCartComponent implements OnInit {

  movies: Movie[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.movies = this.cartService.getMovieCartItems()
  }
  
  removeItem(movie: Movie) {
    while(movie.count>0){
      movie.count = this.cartService.setBookCount(movie.count-1)
      movie.quantity = this.cartService.setBookQuantity(movie.quantity+1)
      }
      this.cartService.removeFromMovieCart(movie)
      console.log("Item removed successfully!")
  }
}
