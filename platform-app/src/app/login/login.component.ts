import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() profileForm: FormGroup = new FormGroup({
    username: new FormControl('username'),
    password: new FormControl('password')
  });

  constructor(
  ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
  }
}
