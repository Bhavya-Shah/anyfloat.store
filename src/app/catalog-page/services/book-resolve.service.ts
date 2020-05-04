import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BookService } from './book.service';
import { Book } from '../models/book.model';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({providedIn: 'root'})
export class BookResolverService implements Resolve<Observable<any> | Book[] > {

  constructor( private bookService: BookService, private dataService: DataService) {}

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const books = this.bookService.getBooks()
    if(books.length === 0)
      return this.dataService.getBooksFromLocalJsonFile()
    else
      return books
  }
}
