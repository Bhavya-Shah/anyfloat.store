import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = []
  booksChanged = new Subject<Book[]>();

  constructor() { }

  setBooks(books: Book[]){
    this.books = books
    this.booksChanged.next(this.books.slice()) 
  }

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
