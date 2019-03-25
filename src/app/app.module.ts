import { AuthGuardService } from "./service/auth-guard.service";
import { CustomNgbModule } from "./custom-ngb/custom-ngb.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MeetingsComponent } from "./meetings/meetings.component";
import { UsersComponent } from "./users/users.component";
import { HeadersComponent } from "./headers/headers.component";
import { RoutingModule } from "./routing/routing.module";
import { UserComponent } from "./users/user/user.component";
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MeetingEditComponent } from "./meetings/meeting-edit/meeting-edit.component";
import { MeetingComponent } from "./meetings/meeting/meeting.component";
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeetingsComponent,
    UsersComponent,
    HeadersComponent,
    UserComponent,
    UserDetailsComponent,
    MeetingEditComponent,
    MeetingComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, RoutingModule, CustomNgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
