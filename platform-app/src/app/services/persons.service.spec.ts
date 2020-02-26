import { PersonsService } from './persons.service';
import { Person } from './../interfaces/person';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('PersonsService', () => {
	let httpTestingController: HttpTestingController;
	let personsService: PersonsService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PersonsService],
			imports: [HttpClientTestingModule]
		});

		httpTestingController = TestBed.get(HttpTestingController);
		personsService = TestBed.get(PersonsService);
	});
});