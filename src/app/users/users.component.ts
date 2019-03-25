import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }

}
