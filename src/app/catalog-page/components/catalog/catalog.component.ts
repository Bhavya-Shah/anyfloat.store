import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';
import { BookService } from '../../services/book.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit, OnDestroy {

  title = "Catalog"
  bookSub: Subscription[] = []
  movieSub: Subscription[] =[]
  constructor(
    private data: DataService,
    private bookService: BookService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    if(this.bookService.getBooks().length === 0) {
      this.bookSub.push(this.data.getBooksFromLocalJsonFile().subscribe())
    }
    if(this.movieService.getMovies().length === 0){
      this.movieSub.push(this.data.getMoviesFromLocalJsonFile().subscribe())
    }
  }

  ngOnDestroy(){
    this.bookSub.forEach(item => item.unsubscribe())
    this.movieSub.forEach(item=> item.unsubscribe())
  }
}
