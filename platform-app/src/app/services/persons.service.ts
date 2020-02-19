import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, repeat } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons$: Observable<any> = this.get();

  constructor(private http: HttpClient) { }

  get() {
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

  getPerson(){
    return of(this.http.get(`/api/person/${this.persons$}`));
  }
}
