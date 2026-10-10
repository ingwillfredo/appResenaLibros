import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccesServiceService } from 'src/app/services/acces-service.service';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent implements OnInit, OnDestroy {
  active: boolean = false;
  private authSub!: Subscription;

  constructor(
    private router: Router, 
    private apiAccess: AccesServiceService) {}

  ngOnInit(): void {
    this.authSub = this.apiAccess.isAuthenticated$.subscribe(status => {
      this.active = status;
    });
  }

  LoginOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.removeItem('idBook');
    localStorage.removeItem('userName');
    this.active = false;
    this.apiAccess.setAuthState(false);
    
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}