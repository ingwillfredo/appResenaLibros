import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {

  // 'books' es la lista cargada en memoria, 'arg' es el texto a buscar
  transform(books: any[], arg: string): any[] {
    if (!books) return [];
    if (!arg || arg.trim() === '' || arg.length < 3) return books;

    const searchTerm = arg.toLowerCase().trim();

    return books.filter(book => {
      const authorMatch = book.author ? book.author.toLowerCase().includes(searchTerm) : false;
      const titleMatch = book.title ? book.title.toLowerCase().includes(searchTerm) : false;
      const genreMatch = book.genre ? book.genre.toLowerCase().includes(searchTerm) : false;

      return authorMatch || titleMatch || genreMatch;
    });
  }

}