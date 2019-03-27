import { BehaviorSubject, Observable} from "rxjs";
import {delay} from 'rxjs/operators'
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import * as faker from "faker";
import * as uuid from "uuid";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: User[] = [];
  private users$: BehaviorSubject<User[]>;
  constructor() {
    for (let i = 0; i < 30; i++) {
      this.users.push({
        id: uuid.v4(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        avatarPath: faker.internet.avatar()
      });
    }
    this.users$ = new BehaviorSubject(this.users);
  }
  getAllUsers(): Observable<User[]> {
    //this mimics requests sent to servers
    return this.users$.asObservable().pipe(delay(2000));
  }
  getAllUsersSync():User[]{
    return this.users;
  }
  getUserById(id: string): User {
    return this.users.filter(user => user.id === id).pop();
  }
  getRandomUserList(size: number): User[] {
    const randomUsers = [];
    for (let i = 0; i < size; i++) {
      randomUsers.push(
        this.users[Math.floor(Math.random() * this.users.length)]
      );
    }
    return randomUsers;
  }
}
