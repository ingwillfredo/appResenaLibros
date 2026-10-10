import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAccess } from '../models/responseAcces.model';
import { Login } from '../models/login.model';
import { AddBook } from '../models/add-book.interface';
import { environment } from 'src/environments/environment.development';

export interface Author {
  idAuthor: number;
  nameAuthor: string;
}

export interface Genre {
  idGenre: number;
  nameGenre: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBookUrl = this.baseUrl + 'Books/GetBookById/';

  getBookById(idBook: number): Observable<any>{
    let result =  this.http.get<any>(this.getBookUrl + idBook);
    return result;
  }

  addBookUrl = this.baseUrl + 'Books/SaveBook/';

  addBook(book: any): Observable<boolean> {
    return this.http.post<boolean>(this.addBookUrl, book);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseUrl}Books/authors`);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.baseUrl}Books/genres`);
  }
}