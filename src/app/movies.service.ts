import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get('/api/movies')
      .map(res => res.json());
  }

  saveMovie(movie) {
    return this.http.put(`/api/movies/${movie.id}`, movie)
      .map(res => res.json());
  }

}
