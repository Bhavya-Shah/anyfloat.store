import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { Subject } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private bookWishlist: Book[] = []
  private movieWishlist: Movie[] = []
  bookWishlistChanged: Subject<Book[]> = new Subject<Book[]>()
  movieWishlistChanged:Subject<Movie[]> = new Subject<Movie[]>()


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

  removeFromBookWishlist(book: Book): Book[] {
    let index = this.bookWishlist.indexOf(book)
    this.bookWishlist.splice(index, 1)
    this.bookWishlistChanged.next(this.bookWishlist.slice())
    localStorage.setItem("BookWishlist", JSON.stringify(this.bookWishlist))
    return this.bookWishlist.slice()
  }

  removeFromMovieWishlist(movie: Movie): Movie[]{
    let index = this.movieWishlist.indexOf(movie)
    this.movieWishlist.splice(index, 1)
    this.movieWishlistChanged.next(this.movieWishlist.slice())
    localStorage.setItem("MovieWishlist", JSON.stringify(this.movieWishlist))
    return this.movieWishlist.slice()
  }
}
