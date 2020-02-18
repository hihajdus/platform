import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  persons$: Observable<any> = this.get();

  constructor(private http: HttpClient) { }

  public get() {
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
}
