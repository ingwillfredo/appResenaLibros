import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciocomponentComponent } from './components/iniciocomponent/iniciocomponent.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './components/registercomponent/registercomponent.component';
import { BookcomponentComponent } from './components/bookcomponent/bookcomponent.component';
import { BookscomponentComponent } from './components/bookscomponent/bookscomponent.component';
import { ReviewcomponentComponent } from './components/reviewcomponent/reviewcomponent.component';
import { ReviewscomponentComponent } from './components/reviewscomponent/reviewscomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarcomponentComponent } from './components/navbarcomponent/navbarcomponent.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterAuthorPipe } from './pipes/filter-author.pipe';
import { RatingComponent } from './components/rating/rating.component';
import { AuthInterceptor } from './utils/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    IniciocomponentComponent,
    HomecomponentComponent,
    LogincomponentComponent,
    RegistercomponentComponent,
    BookcomponentComponent,
    BookscomponentComponent,
    ReviewcomponentComponent,
    ReviewscomponentComponent,
    NavbarcomponentComponent,
    FilterPipe,
    FilterAuthorPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
