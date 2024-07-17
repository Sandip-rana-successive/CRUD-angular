import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';


const BASE_URL = 'https://66862f6f83c983911b011c3e.mockapi.io/name';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }

  fetchData(): Observable<any> {
    return this.http.get(`${BASE_URL}`).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  addData(body: any): Observable<any> {
    console.log("🚀 ~ StudentService ~ addData ~ body:", body)
    return this.http.post(`${BASE_URL}`, body).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }
}
