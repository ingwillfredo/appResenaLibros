import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/userRegister.models';
import { AccesServiceService } from 'src/app/services/acces-service.service';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.css']
})
export class RegistercomponentComponent {
  validate: boolean = false;

  constructor(public formBuild: FormBuilder, private apiAccess: AccesServiceService, private router: Router){};

    public formRegister: FormGroup = this.formBuild.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required]
    })

  Register(){
    this.apiAccess.EmailValidate(this.formRegister.value.email).subscribe(data => {
      this.validate = data;
    });
    if(!this.validate){
      const user: UserRegister = {
        name: this.formRegister.value.name,
        email: this.formRegister.value.email,
        password: this.formRegister.value.password
      }
      this.apiAccess.AddUser(user).subscribe(data => {
        console.log(data);
      })
    }
    else{
      alert('Email ya registrado');
    }
  }

}
