import {
  Arg,
  Mutation,
  Query,
  Resolver
} from 'type-graphql';
import ActorModel from './actor.model';
import { ActorService } from './actor.service';
import { ActorDTO } from './dto/actor.dto';
import { ActorInput } from './inputs/actor.input';

@Resolver((_of) => ActorModel)
export class ActorResolver {

  // Initialize Service(s)
  actorService: ActorService;

  constructor() {
    // Initialize Service
    this.actorService = new ActorService();
  }

  @Query(() => [ActorModel])
  async getAllActors(): Promise<ActorDTO[]> {
    try {
      const data: ActorDTO[] = await this.actorService.getAllActors();
      return data;
    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
  }

  @Query((_returns) => ActorModel, { nullable: false })
  async findActorById(@Arg('id') id: number) {
    try {
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

  @Mutation(() => ActorModel)
  async insertNewActor(
    @Arg('newActorData') user: ActorInput
  ): Promise<ActorDTO> {
    const data: ActorDTO = await this.actorService.insertNewActor(user);

    return data;
  }

  @Mutation(() => ActorModel)
  async updateActor(
    @Arg('idActor') idActor: number,
    @Arg('updateDate') user: ActorInput
  ): Promise<ActorDTO | undefined> {
    const data: [affectedCount: number] = await this.actorService.updateActor(idActor, user);

    // Return an Actor if it's found
    if(data) {
      return this.findActorById(idActor);
    }

    return;

  }

  @Mutation(() => ActorModel)
  async deleteActor(
    @Arg('idActor') idActor: number
  ): Promise<number> {
    const data: number = await this.actorService.deleteActor(idActor);

    return data;
  }

}
