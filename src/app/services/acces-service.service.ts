import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseAccess } from '../models/responseAcces.model';
import { Login } from '../models/login.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccesServiceService {

  baseUrl: string = environment.apiUrl;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkInitialToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  private checkInitialToken(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return Date.now() < (payload.exp * 1000);
    } catch {
      return false;
    }
  }

  setAuthState(isAuth: boolean) {
    this.isAuthenticatedSubject.next(isAuth);
  }

  urlEmailValidate = this.baseUrl + 'Auth/ValidateEmail/';
  EmailValidate(email: string): Observable<any>{
    return this.http.get<any>(this.urlEmailValidate + email);
  }

  urlAddUser = this.baseUrl + 'Auth/AddUser';
  AddUser(user: any): Observable<any>{
    return this.http.post<any>(this.urlAddUser, user);
  }

  urlLoginUser = this.baseUrl + 'Auth/Login';
  LoginUser(login: Login): Observable<any>{
    return this.http.post<any>(this.urlLoginUser, login);
  }
}