import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie.interface';
import { Movies } from '../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [
    Movies
  ]
})
export class MyHomeComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private movieService: Movies) {
    this.movies = this.movieService.getMovies();
  }

  ngOnInit() {
  }
}
