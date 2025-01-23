import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ReviewscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
