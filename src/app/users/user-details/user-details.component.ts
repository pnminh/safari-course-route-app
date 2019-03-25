import { UserService } from "./../../service/user.service";
import { Params } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { User } from "src/app/model/user.model";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User;
  recommendedUsers: User[];
  usersParamsSubscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.usersParamsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUserById(params.id);
        this.recommendedUsers = this.userService.getRandomUserList(4);
      }
    );
  }
  ngOnDestroy(): void {
    this.usersParamsSubscription.unsubscribe();
  }
}
