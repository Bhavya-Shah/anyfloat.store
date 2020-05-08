import { Component, OnInit, } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.sass']
})
export class BookWishlistComponent implements OnInit {

  bookWishlist: Book[]
  constructor(private wishlistService: WishlistService, 
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.bookWishlist = this.wishlistService.getBookWishlist()
    if(this.bookWishlist.length==0)
      this.bookWishlist = JSON.parse(localStorage.getItem("BookWishlist"))
    this.wishlistService.setBookWishlistFromLocalStorage(this.bookWishlist)
  }

  addToCart(book: Book) {
    let bookCartItems = this.cartService.getBookCartItems()
    if(bookCartItems.some((item)=> item.id == book.id)){
      if(book.quantity>0){
      this.cartService.removeFromBookCart(book)
      this.cartService.setBookCount(book.count+1)
      this.cartService.setBookQuantity(book.quantity-1)
      book.count = this.cartService.getBookCount()
      book.quantity = this.cartService.getBookQuantity()
      this.cartService.setBookCartItems(book)
      }
      else{
        console.log("item exists in cart but its quantity is zero", book.quantity)
      }
    }
    else{
      if(book.quantity>0){
        book.count = this.cartService.setBookCount(book.count+1)
        book.quantity = this.cartService.setBookQuantity(book.quantity-1)
        this.cartService.setBookCartItems(book)
      }
      else{
        console.log("item doesnt exsit in cart and its quantity is zero so we cant add it", book.quantity)
      }
    }
    this.router.navigate(['/cart'])
  }

  removeItem(book: Book) {
    this.bookWishlist = this.wishlistService.removeFromBookWishlist(book)
    console.log("Item removed successfully!")
  }
}
