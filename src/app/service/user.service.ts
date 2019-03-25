import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import * as faker from "faker";
import * as uuid from "uuid";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: User[] = [];
  constructor() {
    for (let i = 0; i < 30; i++) {
      this.users.push({
        id: uuid.v4(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        avatarPath: faker.internet.avatar()
      });
    }
  }
  getAllUsers(): User[] {
    return this.users;
  }
}
