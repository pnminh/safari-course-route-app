import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { User } from "../model/user.model";
import { UserService } from "../service/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  /* users$: Observable<User[]>; */
  users: User[];
  /* recommendatedUsers: User[];
  paramsSubscription: Subscription; */
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* if(this.route.snapshot.params.id){
      this.users = [this.userService.getUserById(this.route.snapshot.params.id)]
      this.recommendatedUsers = this.userService.getRandomUserList(5);
    }else{
      this.users = this.userService.getAllUsers();
    } */
    /* this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.users = [
          this.userService.getUserById(this.route.snapshot.params.id)
        ];
        this.recommendatedUsers = this.userService.getRandomUserList(5);
      } else {
        this.users = this.userService.getAllUsers();
      }
    }); */
    this.route.data.subscribe(data => {
      this.users = data.users;
    });
    /* this.users$ = this.userService.getAllUsers(); */
  }
  /* ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  } */
}
