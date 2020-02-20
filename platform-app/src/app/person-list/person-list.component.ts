import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit{
  persons$;

  constructor(public personsService: PersonsService) { }

  ngOnInit() {
    this.persons$ = this.personsService.getPersons();
  }
}
