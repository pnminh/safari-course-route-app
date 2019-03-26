import { MeetingService } from "./../../service/meeting.service";
import { Meeting } from "./../../model/meeting.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-meeting",
  templateUrl: "./meeting.component.html",
  styleUrls: ["./meeting.component.css"]
})
export class MeetingComponent implements OnInit {
  @Input() meeting: Meeting;
  isEdit = false;
  constructor(private meetingService: MeetingService) {}

  ngOnInit() {}
  edit() {
    this.isEdit = !this.isEdit;
    if (!this.isEdit) {
      this.meetingService.updateMeeting(this.meeting);
    }
  }
  delete() {
    this.meetingService.deleteMeetingById(this.meeting.id);
  }
}
