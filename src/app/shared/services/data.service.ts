import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from 'src/app/catalog-page/services/book.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MovieService } from 'src/app/catalog-page/services/movie.service';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    
    private booksURL: string = "assets/json/books.json"
    private moviesUrl: string = "assets/json/movies.json"

    constructor(private bookService: BookService,
        private http:HttpClient,
        private movieService: MovieService) {}

    getBooksFromLocalJsonFile(){
        return this.http.get<Book[]>(this.booksURL)
        .pipe(
            tap(resData=>{
                this.bookService.setBooks(resData)
            })
        )
    }

    getMoviesFromLocalJsonFile(){
        return this.http.get<Movie[]>(this.moviesUrl)
        .pipe(
            tap(resData=> {
                this.movieService.setMovies(resData)
            })
        )
    }
}
