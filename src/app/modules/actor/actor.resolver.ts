import {
  FieldResolver,
  Query,
  Resolver,
  Root
} from 'type-graphql';
import { ActorEntity } from './actor.entity';
import { ActorDTO } from './dto/actor.dto';

@Resolver((_of) => ActorEntity)
export class ActorResolver {

  @Query(() => [ActorEntity])
  async getAllActors(): Promise<ActorDTO[]> {
    // TODO: Create a Service
    const data: ActorDTO[] = [
      {
        idActor: 1,
        name: "Adam",
        gender: "male",
        birthDate: new Date(),
        birthPlace: "West Java",
        nationality: "Indonesia"
      }
    ];

    console.log("Data => ", data);
    return data;
  }

  @FieldResolver((_type) => ActorEntity)
  async products(@Root() order: ActorEntity): Promise<ActorDTO> {
    console.log(order, 'order!');
    return {
      idActor: 1,
      name: "Adam",
      gender: "male",
      birthDate: new Date(),
      birthPlace: "West Java",
      nationality: "Indonesia"
      
    };
  }
}
