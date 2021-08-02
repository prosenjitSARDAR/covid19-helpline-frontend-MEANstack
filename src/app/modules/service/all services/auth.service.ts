import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProviderAndResourceDetails } from './../../../data_models/providerAndResource.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.apiUrl;
  private headers = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient, private router: Router) { }

  signUp(details: ProviderAndResourceDetails): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/registration`, details, { 'headers': this.headers })
      .pipe(catchError(this.handleError))
  }

  login(credential: { email: String, password: String }): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/login`, credential)
      .pipe(catchError(this.handleError))
  }

  changePassword(data: { currentPassword: String, newPassword: String, confirmPassword: String }): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/change-password`, data)
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error['error']['errors'] || error['error']['error']['message'] || 'Sorry! An unknown error occured. Please try again.')
  }

  //if 'token' exist in localStorage it will return 'true' else 'false'
  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
