import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddReview } from '../models/addReview.model';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor(private http: HttpClient) { }

  //books

  urlGetAllBooks = 'https://pruebatecnica.somee.com/api/Access/GetAllBooks'

  GetAllBooks(): Observable<any>{
    return this.http.get<any>(this.urlGetAllBooks);
  }

  urlGetBookById = 'https://pruebatecnica.somee.com/api/Access/GetBookById/'

  GetBookById(id: number): Observable<any>{
    return this.http.get<any>(this.urlGetBookById + id);
  }

  urlGetReviewByIdBook = 'https://pruebatecnica.somee.com/api/Access/GetAllReviewsByBook/'

  GetReviewByIdBook(id: number): Observable<any>{
    return this.http.get<any>(this.urlGetReviewByIdBook + id);
  }

  urlAddReview = 'https://pruebatecnica.somee.com/api/Reviews/AddReview'

  AddReview(obj: AddReview):Observable<any>{
    console.log(obj);
    return this.http.post<any>(this.urlAddReview, obj)
  }
}
