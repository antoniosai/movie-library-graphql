import ActorMovieModel from "../../actormovie/actormovie.model";

export interface ActorDTO {
  idActor: number;
  name: string;
  gender: 'male' | 'female';
  nationality: string;
  birthPlace: string;
  birthDate: Date; 
  actorMovie?: ActorMovieModel[];
}