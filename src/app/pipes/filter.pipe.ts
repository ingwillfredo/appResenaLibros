import { Pipe, PipeTransform } from '@angular/core';
import { HomeserviceService } from '../services/homeservice.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  books: any [] = [];

constructor(private apiService: HomeserviceService){}

  transform(value: any, arg: any): any {
    this.apiService.GetAllBooks().subscribe(data => {this.books = data});
    if(arg === '' || arg.length < 3) return value;
    else{
      const resultSearch = [];
      for(const search of this.books){
          if(search.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            resultSearch.push(search);
          }
      }
      return resultSearch;
    }
  }

}
