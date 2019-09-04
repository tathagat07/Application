import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie-list/favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  movieSearch(value: any) {
    throw new Error("Method not implemented.");
  }
  // private url = 'https://api.themoviedb.org/3/movie/19404?api_key=64c12ccc7cebf2389619ff7a8befd7f5&language=en-US' ;
  url: any;
  public searchapi = "";
  constructor(private http: HttpClient) { }
    value :any;
 fetch_details(value): Observable<any> {
   this.url = 'https://api.themoviedb.org/3/movie/' + value.substring(1,) + '?api_key=64c12ccc7cebf2389619ff7a8befd7f5&language=en-US';
   console.log("hi");
   return this.http.get<any>(this.url);
 }
//  searchService(value) {
//    this.searchapi = 'https://api.themoviedb.org/3/search/company?api_key=64c12ccc7cebf2389619ff7a8befd7f5&query=' + value + '&page=1';
//  }
//   returnsearch(): Observable<any> {
//     return this.http.get<any>(this.searchapi);
//   }

getSearch(url: string): Observable<any> {
  return this.http.get<any>(url);

}

  moviefav(movie): Observable<any> {
    console.log("hit");
    return this.http.post<any>('http://localhost:3000/posts/', movie);
  }

  getfav(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/posts/');
  }
  delMov(id : number): Observable<any>{
    return this.http.delete<any>(`${'http://localhost:3000/posts/'}/${id}`);
  }
   }
