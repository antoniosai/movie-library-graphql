import { ActorDTO } from "../../actor/dto/actor.dto";
import { MovieDTO } from "../../movie/dto/movie.dto";

export interface ActorMovieDTO {
  idActorMovie: number;
  idActor: number;
  idMovie: number;
  actor?: ActorDTO;
  movie?: MovieDTO;
}