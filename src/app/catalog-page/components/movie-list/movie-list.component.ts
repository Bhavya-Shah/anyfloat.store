import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit, OnDestroy {
  
  movies: Movie[] = []
  moviesSub: Subscription

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies()
    this.moviesSub = this.movieService.movieChanged.subscribe(
      (movies: Movie[])=>{
        this.movies = movies
      }
    )
   }

   ngOnDestroy(){
     this.moviesSub.unsubscribe()
   }
}
