import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-reviewscomponent',
  templateUrl: './reviewscomponent.component.html',
  styleUrls: ['./reviewscomponent.component.css']
})
export class ReviewscomponentComponent implements OnInit {
  reviews: any [] = [];

  constructor(private apiService: HomeserviceService, private router: Router){}
  ngOnInit(): void {
    this.GetReviewsByBook();
  }
  
  GetReviewsByBook(){
    var id = Number(localStorage.getItem('idBook'));
    this.apiService.GetReviewByIdBook(id).subscribe(data => {this.reviews = data});
  }

  Review(){
    this.router.navigate(['/review']);
  }
}
