import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { AuthorDTO } from "../dto/author.dto";

@InputType()
export class AuthorInput implements Omit<AuthorDTO, 'idAuthor'> {

  @Field()
  @MaxLength(30)
  name: string;

  @Field()
  description: string;

}