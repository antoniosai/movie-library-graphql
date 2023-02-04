import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { MovieDTO } from "../dto/movie.dto";

@InputType()
export class MovieInput implements Omit<MovieDTO, 'idMovie'> {

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  genre: "mystery" | "thriller" | "comedy" | "sci-fi";

  @Field()
  @MaxLength(4)
  year: number;
  
  @Field()
  idAuthor: number;

}