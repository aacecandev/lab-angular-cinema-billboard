import { Injectable } from '@angular/core';
import { Movie } from '../movie.interface';
import { moviesArray } from '../../sample-movies';

@Injectable()
export class Movies {
  movies: Array<Movie> = moviesArray;

  constructor() {}

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    console.log(id);
    return this.movies.filter(e => e.id === id)[0];
  }
}
