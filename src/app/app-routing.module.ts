import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { IniciocomponentComponent } from './components/iniciocomponent/iniciocomponent.component';
import { LogincomponentComponent } from './components/logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './components/registercomponent/registercomponent.component';
import { BookscomponentComponent } from './components/bookscomponent/bookscomponent.component';
import { BookcomponentComponent } from './components/bookcomponent/bookcomponent.component';
import { ReviewscomponentComponent } from './components/reviewscomponent/reviewscomponent.component';
import { ReviewcomponentComponent } from './components/reviewcomponent/reviewcomponent.component';
import { AuthGuard } from './utils/authGuard';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  {path: '', component: BookscomponentComponent},
  {path: 'home', component: HomecomponentComponent},
  {path: 'login', component: LogincomponentComponent},
  {path: 'register', component: RegistercomponentComponent},
  {path: 'books', component: BookscomponentComponent},
  {path: 'book', component: BookcomponentComponent},
  {path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard]},
  {path: 'reviews', component: ReviewscomponentComponent},
  {path: 'review', component: ReviewcomponentComponent, canActivate: [AuthGuard]},
  {path: '**', component: IniciocomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
