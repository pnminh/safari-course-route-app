import { BehaviorSubject, Observable, of } from "rxjs";
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
  private meetings$: BehaviorSubject<Meeting[]> = new BehaviorSubject(
    this.meetings
  );
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
  getAllMeetings(): Observable<Meeting[]> {
    return this.meetings$.asObservable();
  }
  getMeetingsFilterByDate(fromDate: Date, toDate: Date): Observable<Meeting[]> {
    let filtedMeetings = this.meetings.filter(
      meeting => meeting.time > fromDate && meeting.time < toDate
    );
    return of(filtedMeetings);
  }
  updateMeeting(meeting: Meeting) {
    let newMeetings = this.meetings.filter(
      filteredMeeting => filteredMeeting.id != meeting.id
    );
    this.meetings = [...newMeetings, meeting];
    this.meetings$.next(this.meetings);
  }
  getMeetingById(id: string): Meeting {
    return this.meetings.filter(meeting => meeting.id === id)[0];
  }
  deleteMeetingById(id: string) {
    this.meetings = this.meetings.filter(meeting => meeting.id != id);
    this.meetings$.next(this.meetings);
  }
}
