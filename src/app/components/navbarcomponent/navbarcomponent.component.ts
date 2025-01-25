import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent {
  LoginOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('idBook');
    localStorage.removeItem('idUser');
  }
}
