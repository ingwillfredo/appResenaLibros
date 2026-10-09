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
  currentPage: number = 1;
  pageSize: number = 10; 
  totalPagesArray: number[] = [];

  constructor(private apiService: HomeserviceService, private router: Router){}

ngOnInit(): void {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      this.currentPage = Number(savedPage);
    }

    this.GetAllBooks();
  }

  GetAllBooks(){
    this.apiService.GetAllBooks().subscribe(data => {this.books = data});
  }

  onPageChange(event: number) {
    this.p = event;
    localStorage.setItem('currentPage', this.p.toString());
  }

  SelBook(id: number) {
    localStorage.setItem('currentPage', this.currentPage.toString());
    localStorage.setItem('idBook', id.toString());
    this.router.navigate(['/book']);
  }
}
