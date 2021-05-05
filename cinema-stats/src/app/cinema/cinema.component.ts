import { Component, OnInit } from '@angular/core';

export interface iMovie {
  name: string;
  number: number;
}

const MOVIE_DUMMY_DATA: iMovie[] = [
  {number: 1, name: 'Citizen Kane'},
  {number: 2, name: 'Grand Budapest Hotel'},
  {number: 3, name: 'Mad Max'},
];


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['number', 'name'];
  dataSource = MOVIE_DUMMY_DATA;
}
