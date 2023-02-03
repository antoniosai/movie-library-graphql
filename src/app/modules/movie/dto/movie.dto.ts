import { ActorMovieEntity } from "../../actormovie/actormovie.entity";
import { ActorMovieDTO } from "../../actormovie/dto/actormovie.dto";
import AuthorModel from "../../author/author.model";
import { AuthorDTO } from "../../author/dto/author.dto";

export interface MovieDTO {
  idMovie: number;
  idAuthor: number;
  name: string;
  genre: 'mystery' | 'thriller' | 'comedy' | 'sci-fi' // Just an example. Better use DBMS
  year: number;
  author?: AuthorDTO | AuthorModel;
  movie?: ActorMovieDTO | ActorMovieEntity;
}