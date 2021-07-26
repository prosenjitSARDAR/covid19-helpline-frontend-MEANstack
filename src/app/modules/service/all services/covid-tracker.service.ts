import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidTrackerService {

  private API_URL = environment.apiUrl;
  private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getDailyCovidData(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/data/covid-data`, { 'headers': this.headers })
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Sorry! An unknown error occured. Please try again.')
  }

}
