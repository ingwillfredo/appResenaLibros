import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { ResponseAccess } from 'src/app/models/responseAcces.model';
import { AccesServiceService } from 'src/app/services/acces-service.service';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent {
  result: ResponseAccess = {isSucces: false, token: ''};

  constructor(private router: Router,
              private apiAccess: AccesServiceService,
              public formBuild: FormBuilder){}

  public formLogin: FormGroup = this.formBuild.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  Login(){
    if(this.formLogin.invalid)return;
    const user: Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    }
    this.apiAccess.LoginUser(user).subscribe({
      next:(data)=>{
        if(data.id >0){
          localStorage.setItem("idUser",data.id)
          localStorage.setItem("token",data.token)
          this.router.navigate(['/books']);
        }
        else{
          alert('Credenciales Incorrectas');
        }
      },
      error:(error)=>{
        console.log(error.message)
      }
    });
  }

}
