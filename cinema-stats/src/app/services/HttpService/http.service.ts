import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appConfig } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = appConfig.CINEMA_STATS_API_URL;

  constructor(private http: HttpClient) { }

  public getMovies(id: string){
    return this.http.get(this.apiUrl + 'movies' + `?id=${id}`)
  }
}
