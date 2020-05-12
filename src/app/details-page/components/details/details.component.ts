import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from 'src/app/catalog-page/services/book.service';
import { MovieService } from 'src/app/catalog-page/services/movie.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { AlertService } from 'src/app/shared/services/alert.service';

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

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private movieService: MovieService,
    private wishlistService: WishlistService,
    private cartService: CartService,
    private alertService: AlertService) { }

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

  addToBookWishlist(book: Book) {
    this.alertService.clear()
    let bookWishlist = this.wishlistService.getBookWishlist()

    if (!bookWishlist.some((item) => item.id == book.id)) {
      this.wishlistService.setBookWishlist(book)
      console.log('successfully added')
      this.alertService.success('Book added into wishlist', true)
      setTimeout(()=>{
        this.alertService.end('Book added into wishlist', false)
      }, 1000)
      
    } else {
      this.alertService.error('Book exists in wishlist', true)
      setTimeout(()=>{
        this.alertService.end('Book exists in wishlist', false)
      }, 1000)
    }
  }

  addToMovieWishlist(movie: Movie) {
    this.alertService.clear()
    let bookWishlist = this.wishlistService.getMovieWishlist()

    if (!bookWishlist.some((item) => item.id == movie.id)) {
      this.wishlistService.setMovieWishlist(movie)
      this.alertService.success('Movie added into wishlist', true)
      setTimeout(() => {
        this.alertService.end('Movie added into wishlist', false)
      }, 1000);    
    } else {
      this.alertService.error('Movie exists in wishlist', true)
      // setTimeout(()=>{
      //   this.alertService.end('Movie exists in wishlist',  false)
      // }, 1000)
    }
  }

  addToBookCart(book: Book): void {
    let bookCartItems = this.cartService.getBookCartItems()
    if (bookCartItems.some((item) => item.id == book.id)) {
      if (book.quantity > 0) {
        this.cartService.removeFromBookCart(book)
        this.cartService.setBookCount(book.count + 1)
        this.cartService.setBookQuantity(book.quantity - 1)
        book.count = this.cartService.getBookCount()
        book.quantity = this.cartService.getBookQuantity()
        this.cartService.setBookCartItems(book)
      } else {
        console.log("item exists in cart but its quantity is zero", book.quantity)
      }
    } else {
      if (book.quantity > 0) {
        book.count = this.cartService.setBookCount(book.count + 1)
        book.quantity = this.cartService.setBookQuantity(book.quantity - 1)
        this.cartService.setBookCartItems(book)
      } else {
        console.log("item doesnt exsit in cart and its quantity is zero so we cant add it", book.quantity)
      }
    }
    this.router.navigate(['/cart'])
  }

  addToMovieCart(movie: Movie): void {
    let movieCartItems = this.cartService.getMovieCartItems()
    if (movieCartItems.some((item) => item.id == movie.id)) {
      if (movie.quantity > 0) {
        this.cartService.removeFromMovieCart(movie)
        this.cartService.setMovieCount(movie.count + 1)
        this.cartService.setMovieQuantity(movie.quantity - 1)
        movie.count = this.cartService.getMovieCount()
        movie.quantity = this.cartService.getMovieQuantity()
        this.cartService.setMovieCartItems(movie)
      } else {
        console.log("item exists in cart but its quantity is zero", movie.quantity)
      }
    } else {
      if (movie.quantity > 0) {
        movie.count = this.cartService.setMovieCount(movie.count + 1)
        movie.quantity = this.cartService.setMovieQuantity(movie.quantity - 1)
        this.cartService.setMovieCartItems(movie)
      } else {
        console.log("item doesnt exsit in cart and its quantity is zero so we cant add it", movie.quantity)
      }
    }
    this.router.navigate(['/cart'])
  }
}