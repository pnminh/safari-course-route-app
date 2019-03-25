import { Meeting } from "./../model/meeting.model";
import { MeetingService } from "./../service/meeting.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-meetings",
  templateUrl: "./meetings.component.html",
  styleUrls: ["./meetings.component.css"]
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[];
  constructor(
    private meetingService: MeetingService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.meetings = this.meetingService.getAllMeetings();
  }
  goToUsersPage() {
    this.router.navigate(["/users"], { relativeTo: this.activatedRoute.parent });
  }
}
