import { Model } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";
import { AuthorDTO } from './dto/author.dto';

@ObjectType({ description: 'The Categories model' })
export class AuthorEntity extends Model implements AuthorDTO{

  @Field(() => ID)
  idAuthor: number;

  @Field()
  name: string;

  @Field()
  description: string;
}

