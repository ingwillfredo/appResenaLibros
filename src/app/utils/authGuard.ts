import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckUserToken();
  }

  CheckUserToken(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigateByUrl('login');
      return false;
    }

    if (this.ValidateTokenLocal(token)) {
      return true;
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('idUser');
      this.router.navigateByUrl('login');
      return false;
    }
  }

  ValidateTokenLocal(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = payload.exp * 1000; 
      
      return Date.now() < expirationTime;
    } catch (error) {
      return false;
    }
  }
}