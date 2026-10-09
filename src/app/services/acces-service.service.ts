import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAccess } from '../models/responseAcces.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AccesServiceService {

  //baseUrl: string = 'https://localhost:7162/api/'
  baseUrl: string = 'https://apiconsultalibros.somee.com/api/'

  constructor(private http: HttpClient) { }

  urlEmailValidate = this.baseUrl + 'Auth/ValidateEmail/';

  EmailValidate(email: string): Observable<any>{
    let result =  this.http.get<any>(this.urlEmailValidate + email);
    return result;
  }

  urlAddUser = this.baseUrl + 'Auth/AddUser';

  AddUser(user: any): Observable<any>{
    let result = this.http.post<any>(this.urlAddUser, user)
    return result
  }

  urlLoginUser= this.baseUrl + 'Auth/Login';

  LoginUser(login: Login): Observable<any>{
    let result =  this.http.post<any>(this.urlLoginUser, login);
    return result;
  }

  urlTokenValidate = this.baseUrl + 'Auth/TokenValidate';

  TokenValidate(token: string): Observable<ResponseAccess>{
    return this.http.get<ResponseAccess>(`${this.urlTokenValidate}?token=${token}`)

  }
}
