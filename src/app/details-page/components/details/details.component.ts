import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Book } from 'src/app/shared/models/book.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from 'src/app/catalog-page/services/book.service';
import { MovieService } from 'src/app/catalog-page/services/movie.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  soldOut: boolean = false
  Id: number
  book: Book
  movie: Movie

  constructor(private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private movieService: MovieService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.Id = +param.id
        if (this.router.url.indexOf('/book') > -1 && this.router.url.indexOf('/movie') == -1)
          this.book = this.bookService.getElementById(this.Id)
        if (this.router.url.indexOf('/movie') > -1 && this.router.url.indexOf('/book') == -1)
          this.movie = this.movieService.getElementById(this.Id)
      }
    )
  }
  
  /*first check if the item is
   already added in the wishlist*/
  addToWishlist(book: Book) {
    let bookWishlist = this.wishlistService.getBookWishlist()

    if (!bookWishlist.some((item) => item.id == book.id)) {
      this.wishlistService.setBookWishlist(book)
      console.log("Item added into wishlist!")
    }
    else {
      console.log("Item Exists in wishlist!")
    }
  }

  addToMovieWishlist(movie: Movie) {

  }

  addToCart(book: Book): void {
  }

  addToMovieCart(movie: Movie): void {

  }
}
