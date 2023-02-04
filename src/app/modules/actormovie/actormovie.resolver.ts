import {
  Arg,
  Mutation,
  Resolver
} from 'type-graphql';
import ActorMovieModel from './actormovie.model';
import { ActorMovieService } from './actormovie.service';
import { ActorMovieDTO } from './dto/actormovie.dto';
import { ActorMovieInput } from './inputs/actormovie.input';

@Resolver((_of) => ActorMovieModel)
export class ActorMovieResolver {

  // Initialize Service(s)
  actorMovieService: ActorMovieService;

  constructor() {
    // Initialize Service
    this.actorMovieService = new ActorMovieService();
  }


  @Mutation(() => ActorMovieModel)
  async attachActorMovie(
    @Arg('actorMovieData') actorMovieData: ActorMovieInput,
    
  ): Promise<ActorMovieDTO> {
    const data: ActorMovieDTO = await this.actorMovieService.attach(actorMovieData);

    return data;
  }

  @Mutation(() => Number)
  async detachActorMovie(
    @Arg('actorMovieData') actorMovieData: ActorMovieInput,
    
  ): Promise<number> {
    const data: number = await this.actorMovieService.detach(actorMovieData);

    return data;
  }


}
