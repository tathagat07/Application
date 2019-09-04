import { Injectable } from '@angular/core';
import { IMovie } from './movie-list/favorite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  private url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<<64c12ccc7cebf2389619ff7a8befd7f5>>&language=en-US&page=1' ;
  searchService(value: any) {
    throw new Error('Method not implemented.');
  }

  getMovie(): Observable <IMovie> {
    return this.http.get<IMovie>(this.url);
  }
}
