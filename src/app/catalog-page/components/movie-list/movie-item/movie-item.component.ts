import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/catalog-page/models/movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass']
})
export class MovieItemComponent implements OnInit {
  soldOut: boolean = false
  @Input() movie: Movie;
  constructor() { }

  ngOnInit(): void {
    if(this.movie.quantity == 0){
      this.soldOut = true
    }
    console.log(this.movie);
  }
}


