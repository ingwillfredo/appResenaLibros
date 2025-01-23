import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciocomponent',
  templateUrl: './iniciocomponent.component.html',
  styleUrls: ['./iniciocomponent.component.css']
})
export class IniciocomponentComponent {

  constructor(private router: Router){}

  ClickIngresar(){
    this.router.navigate(['/login'])
  }

  ClickRegistrarse(){
    this.router.navigate(['/register'])
  }

}
