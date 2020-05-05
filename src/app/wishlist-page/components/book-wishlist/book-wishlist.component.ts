import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.sass']
})
export class BookWishlistComponent implements OnInit {

  bookWishlist: Book[]
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.bookWishlist = JSON.parse(localStorage.getItem("BookWishlist"))
    this.wishlistService.setBookWishlistFromLocalStorage(this.bookWishlist)
  }

  removeItem(book: Book) {
    this.bookWishlist = this.wishlistService.removeFromBookWishlist(book)
    console.log("Item removed successfully!")
  }

}
