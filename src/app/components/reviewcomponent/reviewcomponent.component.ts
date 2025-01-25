import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddReview } from 'src/app/models/addReview.model';
import { HomeserviceService } from 'src/app/services/homeservice.service';

@Component({
  selector: 'app-reviewcomponent',
  templateUrl: './reviewcomponent.component.html',
  styleUrls: ['./reviewcomponent.component.css']
})
export class ReviewcomponentComponent implements OnInit {
  update: boolean = false;
  id: number = 0;
  title: string = '';
  description: string = '';
  rating: number = 0;


  constructor(private apiService: HomeserviceService, private router: Router){}

  ngOnInit(): void {
  }

    public formBuild = inject(FormBuilder)

    public formReview: FormGroup = this.formBuild.group({
      id: 0,
      title: ['',Validators.required],
      review: ['',Validators.required]
    });


    AddReview(){
      if(this.formReview.invalid) return;

      const obj: AddReview = {
        id: 0,
        id_Book: Number(localStorage.getItem('idBook')),
        id_User: Number(localStorage.getItem('idUser')),
        title: this.formReview.value.title,
        description: this.formReview.value.review,
        rating: this.rating
      }
      this.apiService.AddReview(obj).subscribe(data =>{
        console.log(data);
      });
      this.router.navigate(['/books']);
    }

    SetRating(rating: number){
      this.rating = Number(rating);
    }
}

