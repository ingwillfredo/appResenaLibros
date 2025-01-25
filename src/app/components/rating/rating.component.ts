import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Output() emitir = new EventEmitter<number>();

  currentRating: number = 0;

  stars = Array(5).fill(0);

  emitRating(rating: number): void {
    this.currentRating = rating;
      this.emitir.emit(rating);
  }
}
