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
    
    if (!this.CheckUserToken()) {
      return false;
    }
    
    const expectedRoles = route.data['expectedRoles'] as Array<number>;
    
    if (expectedRoles) {
      const typeUserStr = localStorage.getItem('typeUser');
      const typeUser = typeUserStr ? Number(typeUserStr) : null;

      if (!typeUser || !expectedRoles.includes(typeUser)) {
        this.router.navigate(['/books']); 
        return false;
      }
    }

    return true;
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
      localStorage.removeItem('typeUser'); 
      localStorage.removeItem('userName');
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