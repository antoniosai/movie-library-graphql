import {
  FieldResolver,
  Query,
  Resolver,
  Root
} from 'type-graphql';
import { ActorEntity } from './actor.entity';
import { ActorService } from './actor.service';
import { ActorDTO } from './dto/actor.dto';

@Resolver((_of) => ActorEntity)
export class ActorResolver {

  actorService: ActorService;

  constructor() {
    this.actorService = new ActorService();
  }

  @Query(() => [ActorEntity])
  async getAllActors(): Promise<ActorDTO[]> {
    try {

      // TODO: Create a Service
      const data: ActorDTO[] = await this.actorService.getAllActors();
      return data;
    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
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
