import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
    profileForm = this.fb.group({
      email: ['', Validators.required, Validators.pattern('[^ @]*@[^ @]*')],
      password: ['', Validators.required]
    });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('submit');
    const val = this.profileForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log("You are logged");
            this.router.navigateByUrl('/persons');
          },
        )
    }
  }
}
