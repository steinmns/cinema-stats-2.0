import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/HttpService/http.service';
import { Observable } from 'rxjs';


export interface iMovie {
  name: string;
  number: number;
  date: Date | undefined;
  rating: number;
  genre: string;
  comments: string | undefined;
  rewatch: boolean | undefined;
}

const MOVIE_DUMMY_DATA: iMovie[] = [
  {number: 1, name: 'Citizen Kane', date: undefined, rating: 9, genre:'Drama', comments:'Pretty good', rewatch: true},
  {number: 2, name: 'Grand Budapest Hotel', date: undefined, rating: 8, genre:'Drama', comments:'Fun!', rewatch: undefined},
  {number: 3, name: 'Mad Max', date: undefined, rating: 6, genre:'Action', comments:'Crazy!', rewatch: false},
];


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  
  displayedColumns: string[] = ['number', 'name', 'date', 'rating', 'genre', 'comments', 'rewatch'];
  dataSource = MOVIE_DUMMY_DATA;
  movieData: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    const response = this.httpService.getMovies('0').subscribe(response => {
      this.movieData = response;
    },);
  }

  addMovie() {
  }
}
