import { Field, InputType } from "type-graphql";
import { ActorMovieDTO } from "../dto/actormovie.dto";

@InputType()
export class ActorMovieInput implements Pick<ActorMovieDTO, 'idActor' | 'idMovie'> {
  @Field({ nullable: false })
  idActor: number;

  @Field({ nullable: false })
  idMovie: number;

}