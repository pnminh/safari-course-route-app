import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"]
})
export class ErrorComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  errorMessage: string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.code === "403") {
        this.errorMessage = "Forbidden! You need to log in first";
      } /* else if(params.code === "404"){
        this.errorMessage = "Page not found";
      } */
    });
    this.route.data.subscribe(params => {
      if (params.message) {
        this.errorMessage = params.message;
      }
    });
  }
}
