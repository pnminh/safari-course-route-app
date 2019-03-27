import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';
import { UserService } from './user.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
/**
 * Using resolver will make sure the data is loaded before page is loaded
*/
export class UserResolverService implements Resolve<User[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User[] | Observable<User[]> | Promise<User[]> {
    //need to use take 1 since subject will keep the subscription alive and
    //resolver will not load the component
    return this.userService.getAllUsers().pipe(take(1));
    /* return [
      { id: "123", username: "test", email: "test", avatarPath: "1234" },
      { id: "123", username: "test", email: "test", avatarPath: "1234" }
    ]; */
  }

  constructor(private userService: UserService) {}
}
