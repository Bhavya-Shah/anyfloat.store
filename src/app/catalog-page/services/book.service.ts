import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksURL: string = "assets/json/books.json"
  books: Book[] = []
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<Book[]>(this.booksURL)
      .pipe(
        tap(resData => {
          this.books = resData; // intialize books array
        })
      );
  }

}
