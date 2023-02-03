import { MovieDTO } from "../../movie/dto/movie.dto";
import MovieModel from "../../movie/movie.model";

export interface AuthorDTO {
  idAuthor: number;
  name: string;
  description: string;
  movies?: MovieDTO[] | MovieModel[];
}