import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = []
  count: number = 0
  moviesChanged = new Subject<Movie[]>()

  constructor() { }

  setMovies(movies: Movie[]) {
    movies.forEach(item=>item.count = this.count)
    this.movies = movies
    this.moviesChanged.next(this.movies.slice()) 
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