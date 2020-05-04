import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie.model';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({providedIn: 'root'})
export class MovieResolverService implements Resolve<Observable<any> | Movie[] > {
    movie: Movie[]
    constructor( private movieService: MovieService, private dataService: DataService) {}

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movies = this.movieService.getMovies()
    if(movies.length === 0)
      return this.dataService.getMoviesFromLocalJsonFile()
    else
      return movies
  }
}