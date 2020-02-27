import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input()
    profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', Validators.required]
    });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  login() {
    const value = this.profileForm.value;

    if (value.email && value.password) {
      this.authService.login(value.email, value.password)
        .subscribe(
          () => {
            this.router.navigateByUrl('/persons');
          },
        )
    }
  }
}
