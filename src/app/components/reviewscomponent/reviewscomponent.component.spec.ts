import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewscomponentComponent } from './reviewscomponent.component';

describe('ReviewscomponentComponent', () => {
  let component: ReviewscomponentComponent;
  let fixture: ComponentFixture<ReviewscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
