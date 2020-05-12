import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = []
  // private subject = new Subject<any>();
  // private keepAfterRouteChange = false;
  count: number = 0
  booksChanged = new Subject<Book[]>()

  constructor(private router: Router) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     if (this.keepAfterRouteChange) {
    //       this.keepAfterRouteChange = false;
    //     } else {
    //       this.clear();
    //     }
    //   }
    // });
  }

  setBooks(books: Book[]) {
    books.forEach(item => item.count = this.count)
    this.books = books
    this.booksChanged.next(this.books.slice())
  }

  getBooks(): Book[] {
    return this.books.slice()
  }

  getElementById(Id: number): Book {
    let book: Book
    this.books.forEach((bookItem) => {
      if (bookItem.id == Id) {
        book = bookItem
        return book
      }
    })
    return book
  }

  // getAlert(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  // success(message: string, keepAfterRouteChange = false) {
  //   this.keepAfterRouteChange = keepAfterRouteChange;
  //   this.subject.next({ type: 'success', text: message });
  // }

  // error(message: string, keepAfterRouteChange = false) {
  //   this.keepAfterRouteChange = keepAfterRouteChange;
  //   this.subject.next({ type: 'error', text: message });
  // }

  // end(message: string, keepAfterRouteChange = false){
  //   this.keepAfterRouteChange = keepAfterRouteChange
  //   this.subject.next({type: 'end', text: message})
  // }

  // clear() {
  //   this.subject.next();
  // }
}