import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedIn = false;
  constructor() {}
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 200);
    });
  }
}
