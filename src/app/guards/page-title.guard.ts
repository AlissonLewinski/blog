import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PageTitleService } from '../services/page-title.service';

@Injectable({
  providedIn: 'root'
})
export class PageTitleGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if (route.data.name)
      PageTitleService.title.next(route.data.name)
    
    return true
  }

}
