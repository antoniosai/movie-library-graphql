import ActorModel from "../../actor/actor.model";
import { ActorDTO } from "../../actor/dto/actor.dto";
import { MovieDTO } from "../../movie/dto/movie.dto";
import MovieModel from "../../movie/movie.model";

export interface ActorMovieDTO {
  idActorMovie: number;
  idActor: number;
  idMovie: number;
  actor?: ActorDTO | ActorModel;
  movie?: MovieDTO | MovieModel;
}