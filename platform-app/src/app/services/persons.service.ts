import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, repeat, catchError } from 'rxjs/operators';
import { Person } from '../interfaces/person';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened: please try again later ;)');
  };

  getPersons(): Observable<Person[]> {
    let id = 0;
    return this.http.get<Person[]>(`/api/person`)
        .pipe(
          tap(() => {
            id += 1;
          }),
          repeat(5),
          catchError(this.handleError)
        );

  }

  getPerson(id){
    return this.http.get(`/api/person/`,{params: {id}})
      .pipe(
        catchError(this.handleError)
      );
  }
}
