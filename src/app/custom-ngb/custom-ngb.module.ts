import { NgModule } from "@angular/core";
import { NgbDatepickerModule, NgbDateAdapter, NgbDateNativeAdapter } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [],
  imports: [NgbDatepickerModule],
  exports: [NgbDatepickerModule],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class CustomNgbModule {}
