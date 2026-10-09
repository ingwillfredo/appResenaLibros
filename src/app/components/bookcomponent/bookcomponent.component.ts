import { Component, OnInit } from '@angular/core';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
import { HomeserviceService } from 'src/app/services/homeservice.service';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {
  title: string = '';
  description: string = '';
  genre: string = '';
  author: string = '';
  image: string = '';
  reviews: number = 0;
  showImageModal: boolean = false;

  constructor(private apiService: BookServiceService,
              private router: Router
  ){}

  ngOnInit(): void {
    this.GetBook();
  }

  GetBook(){
    var id = Number(localStorage.getItem('idBook'));
    this.apiService.getBookById(id).subscribe(
            data =>
            {
                this.title = data.title,
                this.description = data.description,
                this.genre = data.genre
                this.author = data.author
                this.image = data.image;
                this.reviews = data.reviews
            });
  }

  openModal() {
    if (this.image) {
      this.showImageModal = true;
    }
  }

  closeModal() {
    this.showImageModal = false;
  }

  return() {
    this.router.navigate(['/home']);
  }

}


