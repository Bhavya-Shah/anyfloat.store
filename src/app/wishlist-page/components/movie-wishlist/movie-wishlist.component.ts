import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-movie-wishlist',
  templateUrl: './movie-wishlist.component.html',
  styleUrls: ['./movie-wishlist.component.sass']
})
export class MovieWishlistComponent implements OnInit {

  movieWishlist: Movie[]
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.movieWishlist = JSON.parse(localStorage.getItem("MovieWishlist"))
    this.wishlistService.setMovieWishlistFromLocalStorage(this.movieWishlist)
  }

  removeItem(movie: Movie) {
    this.movieWishlist = this.wishlistService.removeFromMovieWishlist(movie)
    console.log("Item removed successfully!")
  }

}
