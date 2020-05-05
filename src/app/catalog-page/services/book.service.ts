import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = []
  wishlist: Book[] = [];
  wishlistChanged = new Subject<Book[]>();
  // private cartItems: Book[] = []
  // private wishlist: Book[] = []
  booksChanged = new Subject<Book[]>()
  // cartItemChanged = new Subject<Book[]>()
  // wishlistChanged = new Subject<Book[]>()

  constructor() { }

  setBooks(books: Book[]){
    this.books = books
    this.booksChanged.next(this.books.slice()) 
  }

  // setCart(book: Book){
  //   let cartLength = this.cartItems.push(book)
  //   console.log(cartLength)
  //   this.cartItemChanged.next(this.cartItems.slice())
  // }

  getBooks(): Book[]{
    return this.books.slice()
  }
  
  getElementById(Id: number): Book {
    let book: Book
    this.books.forEach((bookItem)=>{
      if(bookItem.id == Id)
      {
        book = bookItem
        return book
      }
    })
    return book
  }
}
