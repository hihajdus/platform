import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit{
  persons$;

  constructor(public personsService: PersonsService) { }

  ngOnInit() {
    this.persons$ = this.personsService.get();
  }
}
