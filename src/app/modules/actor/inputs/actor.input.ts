import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { ActorDTO } from "../dto/actor.dto";

@InputType()
export class ActorInput implements Omit<ActorDTO, 'idActor'> {

  @Field({ nullable: false })
  gender: "male" | "female";


  @Field({ nullable: false })
  nationality: string;

  
  @Field({ nullable: false })
  birthPlace: string;

  @Field({ nullable: false })
  birthDate: Date;

  @Field()
  @MaxLength(30)
  @Field({ nullable: false })
  name: string;
}