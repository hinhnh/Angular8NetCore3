import { Injectable, Inject } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { WeatherForecast } from '../models/weather-forecast-model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  apiUrl: string = 'enter-your-api-url';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'weatherforecast';
  }


  getWeatherForecast() {
    return this.http.get<WeatherForecast[]>(`${this.apiUrl}`);   
  }


  // Create
  createTask(data): Observable<any> {
    let API_URL = `${this.apiUrl}/create-task`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

 
  // Read
  showTasks() {
    return this.http.get(`${this.apiUrl}`);
  }

 
  // Update
  updateTask(id, data): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.error)
    )
  }

  // Delete
  deleteTask(id): Observable<any> {
    var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.error)
    )
  }

  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
