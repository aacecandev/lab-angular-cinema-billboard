import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie.interface';
import { Movies } from '../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [Movies]
})
export class MyMovieComponent implements OnInit {
  id: Number;
  movie: Object;

  constructor(private route: ActivatedRoute, private movieService: Movies) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = Number(params['id'])));
    this.movie = this.movieService.getMovie(this.id);
  }
}
