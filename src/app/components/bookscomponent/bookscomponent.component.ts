import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-bookscomponent',
  templateUrl: './bookscomponent.component.html',
  styleUrls: ['./bookscomponent.component.css']
})
export class BookscomponentComponent implements OnInit {
  filter: string = '';
  books: any [] = [];
  p: number = 1;
  collection: any[] = []; 

  constructor(private apiService: HomeserviceService, private router: Router){}

  ngOnInit(): void {
    this.GetAllBooks();
  }

  GetAllBooks(){
    this.apiService.GetAllBooks().subscribe(data => {this.books = data});
  }

  SelBook(id: number){
    let numero: number = id;
    let cadena: string = numero.toString();
    localStorage.setItem('idBook', cadena)
    this.router.navigate(['/book'])
  }
}
