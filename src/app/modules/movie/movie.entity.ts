import { Model } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";
import { AuthorEntity } from "../author/author.entity";
import { MovieDTO } from './dto/movie.dto';

@ObjectType({ description: 'The Categories model' })
export class MovieEntity extends Model implements MovieDTO{

  @Field(() => ID)
  idMovie: number;

  @Field()
  idAuthor: number;

  @Field()
  name: string;
  
  @Field()
  genre: "mystery" | "thriller" | "comedy" | "sci-fi";

  @Field()
  year: number;

  @Field()
  author: AuthorEntity;

}

