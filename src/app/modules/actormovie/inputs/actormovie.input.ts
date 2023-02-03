import { Field, InputType } from "type-graphql";
import { ActorMovieDTO } from "../dto/actormovie.dto";

@InputType()
export class ActorMovieInput implements Pick<ActorMovieDTO, 'idActor' | 'idMovie'> {
  @Field()
  idActor: number;

  @Field()
  idMovie: number;

}