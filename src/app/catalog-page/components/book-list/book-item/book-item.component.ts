import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/catalog-page/models/book.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {

  soldOut: boolean = false
  @Input() book: Book;

  constructor(private wishlistService: WishlistService) {
  }

  ngOnInit(): void {
    if (this.book.quantity == 0) {
      this.soldOut = true
    }
  }

  addToCart(book: Book) {
    console.log("added to cart!")
  }

  /*first check if the item is
  already added in the wishlist*/
  addToWishlist(book: Book) {
    let bookWishlist = this.wishlistService.getBookWishlist()

    if(!bookWishlist.some((item)=>item.id == book.id)){
      this.wishlistService.setBookWishlist(book)
      console.log("Item added into wishlist!")
    }
    else{
      console.log("Item Exists in wishlist!")
    }
  }
}