export interface AddBook {
  idAuthor: number;
  idGenre: number;
  title: string;
  description?: string;
  image?: string;
}