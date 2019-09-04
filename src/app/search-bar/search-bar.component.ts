import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
 public  movies =[];
  constructor(private router: ActivatedRoute, private httpservice: DetailsService, private appservice: DetailsService,private service1: DetailsService) { }
   public api;
  ngOnInit() {

    const id = (this.router.snapshot.paramMap.get('search'));
     this.api = 'https://api.themoviedb.org/3/search/movie?api_key=64c12ccc7cebf2389619ff7a8befd7f5&language=en-US&query=' + id +"&page=1&include_adult=false";
    this.appservice.getSearch(this.api)
    .subscribe(data => {
      console.log(data);

      this.movies = data.results;
    })
  }
  onsubmit1(movie) {
    return this.service1.moviefav(movie).subscribe();
  }
}
