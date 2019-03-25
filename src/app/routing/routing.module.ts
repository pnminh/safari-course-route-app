import { ErrorComponent } from "./../error/error.component";
import { AuthGuardService } from "./../service/auth-guard.service";
import { UserDetailsComponent } from "./../users/user-details/user-details.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./../home/home.component";
import { MeetingsComponent } from "./../meetings/meetings.component";
import { UsersComponent } from "./../users/users.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "meetings",
    component: MeetingsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "users",
    component: UsersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ":id",
        component: UserDetailsComponent
      }
    ]
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  { path: "**", redirectTo: "/error?code=404" }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
