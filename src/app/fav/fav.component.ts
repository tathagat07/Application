import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  movies = [];
  constructor(private _mov: DetailsService) { }

  ngOnInit() {
    this._mov.getfav()
    .subscribe(data =>{
      console.log(data);
      this.movies = data;
    })


  }
  removefav(movie)
  {
    this._mov.delMov(movie.id).subscribe(
      () => console.log("delete"),
      (err) => console.log(err)
      );
  }

}
