import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { WishlistService } from './wishlist.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistResolveService implements Resolve<Observable<any> | Book[] >  {

  constructor(private wishlistService: WishlistService) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const wishlistItems = this.wishlistService.getWishlist()
    return wishlistItems
  }
}
