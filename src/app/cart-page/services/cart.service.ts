import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/catalog-page/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private bookCartItems: Book[]=[]
  private remainingBookQuantity: number
  private bookCount: number
  private movieCartItems: Movie[] = []
  private remainingMovieQuantity: number
  private movieCount: number

  bookCartItemChanged: Subject<Book[]> = new Subject<Book[]>()
  remainingBookQuantityChanged: BehaviorSubject<number>  = new BehaviorSubject<number>(0)
  bookCountChanged:BehaviorSubject<number> = new BehaviorSubject<number>(0)
  movieCartItemChanged:Subject<Movie[]> = new Subject<Movie[]>()
  remainingMovieQuantityChanged:BehaviorSubject<number> = new BehaviorSubject<number>(0)
  movieCountChanged:BehaviorSubject<number> = new BehaviorSubject<number>(0) 

  constructor() { }

  setBookCartItems(book: Book){
    this.bookCartItems.push(book)
    this.bookCartItemChanged.next(this.bookCartItems.slice())
  }

  setMovieCartItems(movie: Movie){
    this.movieCartItems.push(movie)
    this.movieCartItemChanged.next(this.movieCartItems.slice())
  }

  getBookCartItems(): Book[]{
    return this.bookCartItems.slice()
  }

  getMovieCartItems(): Movie[]{
    return this.movieCartItems.slice()
  }

  removeFromBookCart(book: Book) {
    let index = this.bookCartItems.indexOf(book)
    this.bookCartItems.splice(index, 1)
    this.bookCartItemChanged.next(this.bookCartItems.slice())
  }

  removeFromMovieCart(movie: Movie){
    let index = this.movieCartItems.indexOf(movie)
    this.movieCartItems.splice(index, 1)
    this.movieCartItemChanged.next(this.movieCartItems.slice())
  }

  setBookQuantity(qty: number): number{
    this.remainingBookQuantity = qty
    this.remainingBookQuantityChanged.next(this.remainingBookQuantity)
    return this.remainingBookQuantity
  }

  setMovieQuantity(qty: number): number{
    this.remainingMovieQuantity = qty
    this.remainingMovieQuantityChanged.next(this.remainingMovieQuantity)
    return this.remainingMovieQuantity
  }

  getBookQuantity(): number {
    return this.remainingBookQuantity
  }

  getMovieQuantity(): number{
    return this.remainingMovieQuantity
  }

  setBookCount(count: number): number{
    this.bookCount = count
    this.bookCountChanged.next(this.bookCount)
    return this.bookCount
  }

  setMovieCount(count: number): number{
    this.movieCount = count
    this.movieCountChanged.next(this.movieCount)
    return this.movieCount
  }

  getBookCount():number{
    return this.bookCount
  }

  getMovieCount():number{
    return this.movieCount
  }
}
