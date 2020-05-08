import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/catalog-page/models/book.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';
import { CartService } from 'src/app/cart-page/services/cart.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass'],
})
export class BookItemComponent implements OnInit {

  outOfStock: boolean = false
  @Input() book: Book

  constructor(private wishlistService: WishlistService, private cartService: CartService) {
  }

  ngOnInit(): void {
    if (this.book.quantity == 0) {
      this.outOfStock = true
    }
  }

  addToCart(book:Book){ 
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
        this.outOfStock = true
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
  }

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
