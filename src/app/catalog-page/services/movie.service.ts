import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesUrl: string = "assets/json/movies.json"
  movies: Movie[] = []
  constructor(private http: HttpClient) { }
  
  getMovies(){
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      tap(resData=>{
        this.movies = resData // intialize movies array
      })
    )
  }
}
