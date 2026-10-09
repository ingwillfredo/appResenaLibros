import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddReview } from '../models/addReview.model';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  
  //baseUrl: string = 'https://localhost:7162/api/'
  baseUrl: string = 'https://apiconsultalibros.somee.com/api/'

  constructor(private http: HttpClient) { }

  //books

  urlGetAllBooks = this.baseUrl + 'Auth/GetAllBooks'

  GetAllBooks(): Observable<any>{
    return this.http.get<any>(this.urlGetAllBooks);
  }

  urlGetBookById = this.baseUrl + 'books/'

  GetBookById(id: number): Observable<any>{
    return this.http.get<any>(this.urlGetBookById + id);
  }

  urlGetReviewByIdBook = this.baseUrl + 'Reviews/GetAllReviewsByBook/'

  GetReviewByIdBook(id: number): Observable<any>{
    return this.http.get<any>(this.urlGetReviewByIdBook + id);
  }

  urlAddReview = this.baseUrl + 'Reviews/AddReview'

  AddReview(obj: AddReview):Observable<any>{
    console.log(obj);
    return this.http.post<any>(this.urlAddReview, obj)
  }
}
