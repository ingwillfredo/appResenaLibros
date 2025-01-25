import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccesServiceService } from '../services/acces-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckUserToken();
  }

  result: boolean = false;

  constructor(private router: Router, private accesServise: AccesServiceService ){}

  CheckUserToken(): boolean{
    var token = localStorage.getItem('token') || '';
    if(token?.length>0)
    {/*
      if(this.ValidateToken())
        return true;
      else
      {
        this.router.navigateByUrl('');
        return false;
      }*/
      return true;
    }
    else{
      this.router.navigateByUrl('login');
      return false;
    }
  }

  ValidateToken(): boolean{
    var token = localStorage.getItem('token') || '';
    this.accesServise.TokenValidate(token).subscribe(date =>{ console.log(date)
      //this.result = date.issucces;
    })
    if(this.result)
      return true;
    else{
      alert('error en el token')
      this.router.navigateByUrl('');
      return false;
    }
  }
}
