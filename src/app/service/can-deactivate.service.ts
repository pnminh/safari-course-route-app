import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CanDeactivateService
  implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(
    component: CanComponentDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate();
  }
  constructor() {}
}

export interface CanComponentDeactive {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}
