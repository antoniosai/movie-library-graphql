import { AuthorDTO } from "../../author/dto/author.dto";

export interface MovieDTO {
  idMovie: number;
  idAuthor: number;
  name: string;
  genre: 'mystery' | 'thriller' | 'comedy' | 'sci-fi' // Just an example. Better use DBMS
  year: number;
  author?: AuthorDTO
}