import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { DetailsService } from '../details.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  public movies = [];
  public movie: any;

  // tslint:disable-next-line: variable-name
  constructor(private _movieService: MovieService, private service1: DetailsService, private router: Router) {}


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
      this._movieService.getMovie()
    .subscribe(data => {
        console.log(data);
        this.movies = data.results;
      });
  }
movieSearch(search: string) {
  this.router.navigate(['/searchbar', search]);

}

onsubmit1(movie) {
  return this.service1.moviefav(movie).subscribe();
}
onsubmit(){
  this.router.navigate(['/favorites']);
}
}
