import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NotLogInGuardGuard implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sub = new BehaviorSubject<boolean>(true);
    this.auth.isLogIn().subscribe(i => {
        sub.next(!i);
    });
    return sub;
  }

}
