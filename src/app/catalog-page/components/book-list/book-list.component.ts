import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = []
  booksSub: Subscription

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks()
    this.booksSub = this.bookService.booksChanged.subscribe(
      (books: Book[])=>{
        this.books = books
      }
    )
   }

   ngOnDestroy() {
     this.booksSub.unsubscribe()
   }
}
