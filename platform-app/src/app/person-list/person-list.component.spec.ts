import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListComponent } from './person-list.component';

describe('PersonListComponent', () => {
	let component: PersonListComponent;
	let fixture: ComponentFixture<PersonListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PersonListComponent ],
			imports: []
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PersonListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});


})