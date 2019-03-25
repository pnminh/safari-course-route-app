import { AuthService } from "./../service/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  loggedIn$:Promise<boolean>
  ngOnInit() {
    this.loggedIn$ = this.authService.isLoggedIn();
  }
  logIn() {
    this.authService.login();
    this.loggedIn$ = this.authService.isLoggedIn();
  }
  logOut() {
    this.authService.logout();
    this.loggedIn$ = this.authService.isLoggedIn();
  }
}
