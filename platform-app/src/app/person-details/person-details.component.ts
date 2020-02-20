import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';
import { ActionSequence } from 'protractor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  person$;

  constructor(
    public personsService: PersonsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get(`id`);
    this.person$ = this.personsService.getPerson(id);
  }

}
