import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any = [];
  activeMovie;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies.movies;
    });
  }

  selectMovie(movie) {
    this.activeMovie = movie;
    console.log(this.activeMovie);
  }

  saveMovie(movie) {
    this.moviesService.saveMovie(movie).subscribe(movies => {
      this.movies = movies;
    });
  }

}
