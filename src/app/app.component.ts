import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie recommondation';
  movies = [{
    id: 1,
    title: "People Places Things",
    data: "14/08/2015",
    duration: "85 minutes",
    genre: "Comedy",
    synopsis: "Will Henry is a newly single graphic"
  },
  {
  id: 2,
    title: "Wolf Warrior 2",
    data: "14/07/2017",
    duration: "126 minutes",
    genre: "Action",
    synopsis: "Will Henry is a newly single graphic"
  },
  {
  id: 3,
    title: "Wolf Warrior",
    data: "14/02/2016",
    duration: "118 minutes",
    genre: "Action",
    synopsis: "Will Henry is a newly single graphic"
  }
  ]

  activeMovie;

  selectMovie(movie) {
    this.activeMovie = movie;
    console.log(this.activeMovie);
  }
}
