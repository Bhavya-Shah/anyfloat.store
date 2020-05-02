import { Component, OnInit,Input } from '@angular/core';
import { Book } from 'src/app/catalog-page/models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {
  soldOut: boolean = false
  booksURL: string = "assets/json/books.json"
  @Input() book: Book;

  constructor() { 
  }

  ngOnInit(): void {
    if(this.book.quantity == 0){
      this.soldOut = true
    }
    console.log(this.book);
  }
}

