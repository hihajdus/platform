import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  persons$;

  constructor(public personsService: PersonsService) { }

  ngOnInit() {
    this.persons$ = this.personsService.getPerson();
  }

}
