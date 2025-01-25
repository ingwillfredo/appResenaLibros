import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAccess } from '../models/responseAcces.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AccesServiceService {

  constructor(private http: HttpClient) { }

  urlEmailValidate = 'https://localhost:7099/api/Access/ValidateEmail/';

  EmailValidate(email: string): Observable<any>{
    let result =  this.http.get<any>(this.urlEmailValidate + email);
    return result;
  }

  urlAddUser = 'https://localhost:7099/api/Access/AddUser';

  AddUser(user: any): Observable<any>{
    let result = this.http.post<any>(this.urlAddUser, user)
    return result
  }

  urlLoginUser= 'https://localhost:7099/api/Access/LoginUser';

  LoginUser(login: Login): Observable<any>{
    let result =  this.http.post<any>(this.urlLoginUser, login);
    return result;
  }

  urlTokenValidate = 'http://localhost:7099/api/Access/TokenValidate';

  TokenValidate(token: string): Observable<ResponseAccess>{
    return this.http.get<ResponseAccess>(`${this.urlTokenValidate}?token=${token}`)

  }
}
