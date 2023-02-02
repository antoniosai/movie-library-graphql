import { Model } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";
import { ActorDTO } from './dto/actor.dto';

@ObjectType({ description: 'The Categories model' })
export class ActorEntity extends Model implements ActorDTO{

  @Field(() => ID)
  idActor: number;

  @Field()
  name: string;

  @Field()
  gender: 'male' | 'female';

  @Field()
  nationality: string;

  @Field()
  birthPlace: string;

  @Field()
  birthDate: Date;
}

