import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';
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
    private router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get(`id`);
    this.person$ = this.personsService.getPerson(id);
  }

}
