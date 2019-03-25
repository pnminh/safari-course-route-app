import { UsersComponent } from "./../users/users.component";
import { MeetingsComponent } from "./../meetings/meetings.component";
import { HomeComponent } from "./../home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "meetings", component: MeetingsComponent },
  { path: "users", component: UsersComponent },
  { path: '**', redirectTo: "home" },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
