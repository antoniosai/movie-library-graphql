import ActorMovieModel from "./actormovie.model";
import { ActorMovieDTO } from "./dto/actormovie.dto";
import { ActorMovieInput } from "./inputs/actormovie.input";

export class ActorMovieService {

  async findByIdActorAndIdMovie(idActor: number, idMovie: number): Promise<ActorMovieModel> {
    const action = await ActorMovieModel.findOrCreate({
      where: { idActor: idActor, idMovie: idMovie },
    });

    return action[0];
  }

  async attach(actorMovieData: ActorMovieInput): Promise<ActorMovieDTO> {
    const action = await ActorMovieModel.upsert({ idActor: actorMovieData.idActor, idMovie: actorMovieData.idMovie });


    console.log("Action => ", action);

    return action[0];
  }

  async detach(actorMovieData: ActorMovieInput): Promise<number> {
    return await ActorMovieModel.destroy({
      where: {
        idActor: actorMovieData.idActor,
        idMovie: actorMovieData.idMovie //this will be your id that you want to delete
      }
    });
  }

}