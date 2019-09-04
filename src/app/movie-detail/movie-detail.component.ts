import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  // _activate: any;
  // _gds: any;

  constructor(
    private activate: ActivatedRoute,
    private gds: DetailsService
  ) {}
public movie;
selected: any;

  ngOnInit() {
    this.activate.params.subscribe(params =>
      this.movie = params['id']);
    console.log('this.movie');
    this.gds.fetch_details(this.movie).subscribe(data => this.movie = data);
  }

}
