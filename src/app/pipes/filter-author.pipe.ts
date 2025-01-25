import { Pipe, PipeTransform } from '@angular/core';
import { HomeserviceService } from '../services/homeservice.service';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {
  books: any [] = [];

  constructor(private apiService: HomeserviceService){}

  transform(value: any, arg: any): any {
    this.apiService.GetAllBooks().subscribe(data => {this.books = data});
    if(arg === '' || arg.length < 3) return value;
    else{
      const resultSearch = [];
      for(const search of this.books){
          if(search.author.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultSearch.push(search);
          }
          if(search.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultSearch.push(search);
          }
          if(search.genre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultSearch.push(search);
          }
      }
      return resultSearch;
    }
  }

}
