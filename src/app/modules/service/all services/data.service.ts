import { ProviderAndResourceDetails } from './../../../data_models/providerAndResource.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = environment.apiUrl;
  private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  getProfileDetails(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/data/profile-details`, { 'headers': this.headers })
      .pipe(catchError(this.handleError))
  }

  updateProfileDetails(details: ProviderAndResourceDetails): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/data/profile-details`, details, { 'headers': this.headers })
      .pipe(catchError(this.handleError))
  }

  handleError(error) {
    return throwError(error.message || 'Sorry! An unknown error occured. Please try again.')
  }




}
