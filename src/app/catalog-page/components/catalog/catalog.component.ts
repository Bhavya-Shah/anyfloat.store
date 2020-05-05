import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit, OnDestroy {

  title = "Catalog"
  bookSub: Subscription
  movieSub: Subscription
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.bookSub = this.data.getBooksFromLocalJsonFile().subscribe()
    this.movieSub = this.data.getMoviesFromLocalJsonFile().subscribe()
  }

  ngOnDestroy(){
    this.bookSub.unsubscribe()
    this.movieSub.unsubscribe()
  }
}
