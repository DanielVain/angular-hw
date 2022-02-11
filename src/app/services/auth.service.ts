import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = false;
  }

  isAuth(): boolean {
    return this.isLoggedIn;
  }

  login(email: string, password: string): boolean {
    this.isLoggedIn = true;
    return true;
  }
}
