import { Component, OnInit,Input, ViewChild, HostListener } from '@angular/core';
import {BookService} from '../../../services/book.service';
import { Book } from 'src/app/catalog-page/models/book.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {
  
  @ViewChild('img') img
  booksURL: string = "assets/json/books.json"
  @Input() book: Book;

  constructor(private bookService: BookService,
    private http: HttpClient) { 
      // this.http.get(this.booksURL).subscribe(
      //   response=>{
      //     this.books = response
      //     console.log(response)
      //   }
      // )
  }

  ngOnInit(): void {
    // this.bookService.getBooks()
    console.log(this.book);
  }
}

