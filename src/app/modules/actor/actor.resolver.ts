import {
  Arg,
  Mutation,
  Query,
  Resolver
} from 'type-graphql';
import { ActorEntity } from './actor.entity';
import { ActorService } from './actor.service';
import { ActorDTO } from './dto/actor.dto';
import { ActorInput } from './inputs/actor.input';

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

  @Query((_returns) => ActorEntity, { nullable: false })
  async findActorById(@Arg('id') id: number) {
    try {
      // TODO: Create a Service
      const data: ActorDTO | null = await this.actorService.getActorById(id);

      if(!data) {
        console.error(`Failed find Actor with id ${id}`);
        return;
      }

      return data;

    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
  }

  @Mutation(() => ActorEntity)
  async insertNewActor(
    @Arg('newUserData') user: ActorInput
  ): Promise<ActorDTO> {
    const data: ActorDTO = await this.actorService.insertNewActor(user);

    return data;
  }

  @Mutation(() => ActorEntity)
  async updateActor(
    @Arg('idActor') idActor: number,
    @Arg('updateDate') user: ActorInput
  ): Promise<ActorDTO | undefined> {
    const data: [affectedCount: number] = await this.actorService.updateActor(idActor, user);

    if(data) {
      return this.findActorById(idActor);
    }

    return;

  }

}
