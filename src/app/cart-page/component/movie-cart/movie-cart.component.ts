import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.sass']
})
export class MovieCartComponent implements OnInit {

  movies: Movie[] = []

  constructor(private cartService: CartService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.movies = this.cartService.getMovieCartItems()
  }
  
  removeItem(movie: Movie) {
    this.alertService.clear()
    while(movie.count>0){
      movie.count = this.cartService.setBookCount(movie.count-1)
      movie.quantity = this.cartService.setBookQuantity(movie.quantity+1)
      }
      this.cartService.removeFromMovieCart(movie)
      this.alertService.success('Movie removed from cart', true)
      setTimeout(() => {
        this.alertService.end('Movie removed from cart', false)
      }, 1000);
  }
}
