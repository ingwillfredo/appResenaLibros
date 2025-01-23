import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent {

  constructor(private router: Router){}

  clickIngresar(){
    this.router.navigate(['/home'])
  }

}
