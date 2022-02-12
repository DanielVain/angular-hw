import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @ViewChild('form', { static: false }) loginForm: NgForm;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  handleSubmit(): void {
    if (this.loginForm.form.status == 'VALID') {
      if (
        this.authService.login(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
      ) {
        this.router.navigate(['dashboard']);
        this.loginForm.reset();
      }
    }
  }
}
