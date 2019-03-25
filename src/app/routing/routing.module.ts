import { UserDetailsComponent } from './../users/user-details/user-details.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./../home/home.component";
import { MeetingsComponent } from "./../meetings/meetings.component";
import { UsersComponent } from "./../users/users.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "meetings", component: MeetingsComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id", component: UserDetailsComponent }]
  },
  { path: "**", redirectTo: "home" }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
