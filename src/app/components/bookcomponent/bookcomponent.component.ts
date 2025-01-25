import { Component, OnInit } from '@angular/core';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
import { HomeserviceService } from 'src/app/services/homeservice.service';

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
  constructor(private apiService: HomeserviceService){}

  ngOnInit(): void {
    this.GetBook();
  }

  GetBook(){
    var id = Number(localStorage.getItem('idBook'));
    this.apiService.GetBookById(id).subscribe(
            data =>
            {
                this.title = data.title,
                this.description = data.description,
                this.genre = data.genre
                this.author = data.author
            });
  }

}


