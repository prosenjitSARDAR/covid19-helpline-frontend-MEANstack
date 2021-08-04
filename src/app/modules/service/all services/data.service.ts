import { ProviderAndResourceDetails } from './../../../data_models/providerAndResource.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_URL = Config.backendAPIUrl;
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

  getResources(category: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/data/resource/${category}`, { 'headers': this.headers })
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error['error']['errors'] || error['error']['error']['message'] || 'Sorry! An unknown error occured. Please try again.')
  }




}
