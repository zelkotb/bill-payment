import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '../services/util.service';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class BillerListGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!UtilService.getFromLocalStorage(Constant.billerStorage)) {
      this.router.navigateByUrl('/context/info');
      return false
    }
    return true;
  }

}
