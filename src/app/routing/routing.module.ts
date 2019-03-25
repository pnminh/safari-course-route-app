import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { MeetingsComponent } from './../meetings/meetings.component';
import { UsersComponent } from './../users/users.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "meetings", component: MeetingsComponent },
  { path: "users", component: UsersComponent },
  { path: "users/:id", component: UsersComponent },
  { path: "**", redirectTo: "home" }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
