import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Meeting } from "../model/meeting.model";
import * as faker from "faker";
import * as uuid from "uuid";
@Injectable({
  providedIn: "root"
})
export class MeetingService {
  private meetings: Meeting[] = [];
  constructor(private userService: UserService) {
    for (let i = 0; i < 30; i++) {
      const randomUsers = this.userService.getRandomUserList(4);
      this.meetings.push({
        id: uuid.v4(),
        name: faker.lorem.slug(),
        description: faker.lorem.paragraph(),
        time: faker.date.future(),
        users: randomUsers
      });
    }
  }
  getAllMeetings(): Meeting[] {
    return this.meetings;
  }
}
