import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  private wishlist: Book[] = [];
  wishlistChanged = new Subject<Book[]>();
  
  constructor() { }

  setWishlistFromLocalstorage(books: Book[]){
    this.wishlist = books
    this.wishlistChanged.next(this.wishlist.slice())
  }

  setWishlist(book:Book){
    this.wishlist.push(book)
    this.wishlistChanged.next(this.wishlist.slice())
    localStorage.setItem("wishlist", JSON.stringify(this.wishlist))
  }

  getWishlist(): Book[]{
    return this.wishlist.slice()
  }

  /*first splice the wishlist
  second update the Subject
  third return the remaining array*/
  removeFromWishlist(book: Book): Book[] {
    let index = this.wishlist.indexOf(book)
    this.wishlist.splice(index, 1)
    this.wishlistChanged.next(this.wishlist.slice())
    //removing from localstoarage
    localStorage.setItem("wishlist", JSON.stringify(this.wishlist))
    return this.wishlist.slice()
  }
}
