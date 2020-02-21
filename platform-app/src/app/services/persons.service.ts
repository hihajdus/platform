import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, repeat } from 'rxjs/operators';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    let id = 0;
    return this.http.get<Person[]>(`/api/person`)
        .pipe(
          tap(() => {
            id += 1;
            console.log(id);
          }),
          repeat(5)
        );

  }

  getPerson(id){
    return this.http.get(`/api/person/`,{params: {id}});
  }
}
