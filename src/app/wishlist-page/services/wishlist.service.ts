import { Injectable, ElementRef } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { Subject } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private bookWishlist: Book[] = []
  private movieWishlist: Movie[] = []
  bookWishlistChanged = new Subject<Book[]>()
  movieWishlistChanged = new Subject<Movie[]>()


  constructor() { }

  setBookWishlistFromLocalStorage(books: Book[]){
    if(books!=null){
      this.bookWishlist = books
      this.bookWishlistChanged.next(this.bookWishlist.slice())
    }
  }

  setMovieWishlistFromLocalStorage(movies: Movie[]){
    if(movies!=null){
      this.movieWishlist = movies
      this.movieWishlistChanged.next(this.movieWishlist.slice())
    }
  }

  setBookWishlist(book:Book){
    this.bookWishlist.push(book)
    this.bookWishlistChanged.next(this.bookWishlist.slice())
    localStorage.setItem("BookWishlist", JSON.stringify(this.bookWishlist))
  }

  setMovieWishlist(movie:Movie){
    this.movieWishlist.push(movie)
    this.movieWishlistChanged.next(this.movieWishlist.slice())
    localStorage.setItem("MovieWishlist", JSON.stringify(this.movieWishlist))
  }

  getBookWishlist(): Book[]{
    return this.bookWishlist.slice()
  }

  getMovieWishlist(): Movie[]{
    return this.movieWishlist.slice()
  }

  /*first splice the wishlist
  second update the Subject
  third return the remaining array*/
  removeFromBookWishlist(book: Book): Book[] {
    let index = this.bookWishlist.indexOf(book)
    this.bookWishlist.splice(index, 1)
    this.bookWishlistChanged.next(this.bookWishlist.slice())
    //removing from localstoarage
    localStorage.setItem("BookWishlist", JSON.stringify(this.bookWishlist))
    return this.bookWishlist.slice()
  }

  /*first splice the movieWishlist
  second update the Subject
  third return the remaining array*/
  removeFromMovieWishlist(movie: Movie): Movie[]{
    let index = this.movieWishlist.indexOf(movie)
    this.movieWishlist.splice(index, 1)
    this.movieWishlistChanged.next(this.movieWishlist.slice())
    //removing from localstoarage
    localStorage.setItem("MovieWishlist", JSON.stringify(this.movieWishlist))
    return this.movieWishlist.slice()
  }
}
