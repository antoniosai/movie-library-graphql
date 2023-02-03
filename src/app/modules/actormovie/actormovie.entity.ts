import { Model } from "sequelize-typescript";
import { Field, ObjectType } from "type-graphql";
import { ActorEntity } from "../actor/actor.entity";
import { MovieEntity } from "../movie/movie.entity";

@ObjectType({ description: 'The Actor Movie model' })
export class ActorMovieEntity extends Model{

  @Field()
  idActor: number;

  @Field()
  idMovie: number;

  @Field()
  movie: MovieEntity;

  @Field()
  actor: ActorEntity;


}

