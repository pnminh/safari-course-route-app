import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MeetingsComponent } from "./meetings/meetings.component";
import { UsersComponent } from "./users/users.component";
import { HeadersComponent } from "./headers/headers.component";
import { RoutingModule } from "./routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeetingsComponent,
    UsersComponent,
    HeadersComponent
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
