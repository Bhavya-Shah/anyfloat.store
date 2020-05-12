import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/catalog-page/models/book.model';
import { WishlistService } from 'src/app/wishlist-page/services/wishlist.service';
import { CartService } from 'src/app/cart-page/services/cart.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass'],
})
export class BookItemComponent implements OnInit {

  outOfStock: boolean = false
  @Input() book: Book

  constructor(private wishlistService: WishlistService, 
              private cartService: CartService, 
              private alertService: AlertService) {}

  ngOnInit(): void {
    if (this.book.quantity == 0) {
      this.outOfStock = true
    }
  }

  addToCart(book:Book){ 
    this.alertService.clear()
    let bookCartItems = this.cartService.getBookCartItems()
    if(bookCartItems.some((item)=> item.id == book.id)){
      if(book.quantity>0){
      this.cartService.removeFromBookCart(book)
      this.cartService.setBookCount(book.count+1)
      this.cartService.setBookQuantity(book.quantity-1)
      book.count = this.cartService.getBookCount()
      book.quantity = this.cartService.getBookQuantity()
      this.cartService.setBookCartItems(book)
      this.alertService.success('Book added into cart', true)
      setTimeout( ()=>{
        this.alertService.end('Book added into cart',false)
      }
      , 1000)
      }
      else{
        this.outOfStock = true
        this.alertService.error('Book exists in cart', true)
        setTimeout( ()=>{
          this.alertService.end('Book exists in cart',false)
        }
        , 1000)
      }
    }
    else{
      if(book.quantity>0){
        book.count = this.cartService.setBookCount(book.count+1)
        book.quantity = this.cartService.setBookQuantity(book.quantity-1)
        this.cartService.setBookCartItems(book)
        this.alertService.success('Book added into cart', true)
        setTimeout( ()=>{
          this.alertService.end('Book added into cart',false)
        }
        , 1000)
      }
      else{
        this.alertService.error('Out of stock', true)
        setTimeout( ()=>{
          this.alertService.end('Out of stock',false)
        }
        , 1000)
      }
    }
  }

  addToWishlist(book: Book) {
    this.alertService.clear()
    let bookWishlist = this.wishlistService.getBookWishlist()

    if(!bookWishlist.some((item)=>item.id == book.id)){
      this.wishlistService.setBookWishlist(book)
      this.alertService.success('Book added into wishlist', true)
      setTimeout( ()=>{
        this.alertService.end('Book added into wishlist',false)
      }
      , 1000)
    }
    else{
      this.alertService.error('Book exists in wishlist', true)
      setTimeout( ()=>{
        this.alertService.end('Book exists in wishlist',false)
      }
      , 1000)
    }
  }  
}
