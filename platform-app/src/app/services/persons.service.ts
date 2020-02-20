import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, repeat } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  constructor(private http: HttpClient) { }

  getPersons() {
    let id = 0;
    return this.http.get(`/api/person`)
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
