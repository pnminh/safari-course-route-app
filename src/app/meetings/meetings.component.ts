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
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (!queryParams.from_date && !queryParams.to_Date) {
        this.meetings = this.meetingService.getAllMeetings();
      } else {
        const fromDate: Date = queryParams.from_date
          ? new Date(queryParams.from_date)
          : new Date();
        const toDate: Date = queryParams.to_date
          ? new Date(queryParams.to_date)
          : new Date();
        this.meetings = this.meetingService.getMeetingsFilterByDate(
          fromDate,
          toDate
        );
      }
    });
  }
  goToUsersPage() {
    this.router.navigate(["/users"], {
      relativeTo: this.activatedRoute.parent
    });
  }
  onFiltering(fromDate: HTMLInputElement, toDate: HTMLInputElement) {
    console.log(fromDate.value, toDate.value);
    this.router.navigate(["/meetings"], {
      queryParams: { from_date: fromDate.value, to_date: toDate.value }
    });
  }
}
