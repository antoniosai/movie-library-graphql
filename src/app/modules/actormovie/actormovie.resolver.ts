import {
  Arg,
  Mutation,
  Resolver
} from 'type-graphql';
import ActorMovieModel from './actormovie.model';
import { ActorMovieService } from './actormovie.service';
import { ActorMovieDTO } from './dto/actormovie.dto';

@Resolver((_of) => ActorMovieModel)
export class ActorMovieResolver {

  // Initialize Service(s)
  actormovieService: ActorMovieService;

  constructor() {
    // Initialize Service
    this.actormovieService = new ActorMovieService();
  }

  @Mutation(() => ActorMovieModel)
  async detachActorMovie(
    @Arg('idActor') idActor: number,
    @Arg('idMovie') idMovie: number
  ): Promise<number> {
    const data: number = await this.actormovieService.detach(idActor, idMovie);

    // Return an ActorMovie if it's found
    return data;
  }

  @Mutation(() => ActorMovieModel)
  async attachActorMovie(
    @Arg('idActor') idActor: number,
    @Arg('idMovie') idMovie: number
  ): Promise<ActorMovieDTO | undefined> {
    const data: ActorMovieDTO = await this.actormovieService.attach(idActor, idMovie);

    // Return an ActorMovie if it's found
    if(data) {
      return this.actormovieService.attach(idActor, idMovie);
    }
    return;
  }

}
