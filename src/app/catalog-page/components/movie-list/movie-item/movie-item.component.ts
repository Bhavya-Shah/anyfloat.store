import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/catalog-page/models/movie.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {
  
  soldOut: boolean = false
  @Input() movie: Movie;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    if(this.movie.quantity == 0){
      this.soldOut = true
    }
  }

  addToCart(movie: Movie){
    console.log("added to cart!")
  }

  addToWishlist(movie: Movie){
    let movieWishlist = this.wishlistService.getMovieWishlist()

    if(!movieWishlist.some((item)=>item.id == movie.id)){
      this.wishlistService.setMovieWishlist(movie)
      console.log("Item added into wishlist!")
    }
    else{
      console.log("Item Exists in wishlist!")
    }  }
}


