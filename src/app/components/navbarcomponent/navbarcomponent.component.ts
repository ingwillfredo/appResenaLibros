import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent implements OnInit {
  active: boolean = false;

  ngOnInit(): void {
    const active = sessionStorage.getItem('Active')
    if(active && active === '1'){
      this.active = true;
    }
  }

  LoginOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('idBook');
    localStorage.removeItem('idUser');
    sessionStorage.setItem('Active','0');
    this.active = false;
  }
}
