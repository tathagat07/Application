import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';
import { FavComponent } from './fav/fav.component';
import { MovieListComponent } from './movie-list/movie-list.component';



const routes: Routes = [
  {path : 'searchbar/:search' , component: SearchBarComponent},
  {path : 'favorites', component: FavComponent},
  {path : 'movie/:id' , component: MovieDetailComponent},
  {path : 'details', component: MovieDetailComponent},
  {path : 'home', component: MovieListComponent},
  {path : '' , component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovieDetailComponent, SearchBarComponent, SearchComponent, FavComponent, MovieListComponent];
