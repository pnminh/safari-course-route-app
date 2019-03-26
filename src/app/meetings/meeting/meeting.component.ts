import { CanComponentDeactive } from "./../../service/can-deactivate.service";
import { MeetingService } from "./../../service/meeting.service";
import { Meeting } from "./../../model/meeting.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-meeting",
  templateUrl: "./meeting.component.html",
  styleUrls: ["./meeting.component.css"]
})
export class MeetingComponent implements OnInit {
  @Input() meeting: Meeting;
  @Output()isEditEmitter = new EventEmitter<boolean>();
  isEdit = false;
  constructor(private meetingService: MeetingService) {}

  ngOnInit() {}
  edit() {
    this.isEdit = !this.isEdit;
    this.isEditEmitter.emit(this.isEdit);
    if (!this.isEdit) {
      this.meetingService.updateMeeting(this.meeting);
    }
  }
  delete() {
    this.meetingService.deleteMeetingById(this.meeting.id);
  }
}
