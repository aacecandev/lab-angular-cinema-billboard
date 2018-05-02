import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { Error404Component } from './error404/error404.component';


export const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent },
  { path: '**', component: Error404Component }
];
