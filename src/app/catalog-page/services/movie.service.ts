import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = []
  movieChanged = new Subject<Movie[]>()

  constructor() { }

  setMovies(movies: Movie[]) {
    this.movies = movies
    this.movieChanged.next(this.movies.slice())
  }
  
  getMovies(): Movie[]{
    return this.movies.slice()
  }
  
  getElementById(Id: number) : Movie{
    let movie: Movie
    this.movies.forEach(movieItem=>{
      if(movieItem.id == Id){
        movie = movieItem
        return movie
      }
    })
    return movie
  }
}
