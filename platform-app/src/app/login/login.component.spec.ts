import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const email = component.profileForm.controls.email;
  const password = component.profileForm.controls.password;
  const element = fixture.nativeElement;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render form with email and password inputs', () => {
    expect(element.querySelector('form').toBeTruthy());
    expect(element.querySelector('#email').toBeTruthy());
    expect(element.querySelector('#password').toBeTruthy());
    expect(element.querySelector('button').toBeTruthy());
  })
  it('should return model invalid when form is empty', () => {
    expect(component.profileForm.valid).toBeFalsy();
  });
  it('should validate email input as required', () => {
    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
  });
  it("should validate password input as required", () => {
    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });
  it('should validate email format', () => {
    email.setValue('test');
    const errors = email.errors;

    expect(errors.required).toBeFalsy();
    expect(errors.required).toBeTruthy();
    expect(email.valid).toBeFalsy();
  });
  it('should validate email format correctly', () => {
    email.setValue('email@gmail.com');
    const errors = email.errors || {};

    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeFalsy();
    expect(email.valid).toBeTruthy();
  })
});
