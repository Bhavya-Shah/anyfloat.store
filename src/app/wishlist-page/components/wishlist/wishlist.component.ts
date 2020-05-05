import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  wishlist: Book[]

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"))
    this.wishlistService.setWishlistFromLocalstorage(this.wishlist)
  }

  removeItem(book: Book) {
    this.wishlist = this.wishlistService.removeFromWishlist(book)
    console.log("Item removed successfully!")
  }
}
