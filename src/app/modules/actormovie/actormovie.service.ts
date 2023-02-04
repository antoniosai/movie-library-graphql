import ActorMovieModel from "./actormovie.model";
import { ActorMovieDTO } from "./dto/actormovie.dto";

export class ActorMovieService {

  async attach(idActor: number, idMovie: number): Promise<ActorMovieDTO> {
    return await ActorMovieModel.create({
      idActor: idActor,
      idMovie: idMovie
    });
  }

  async detach(idActor: number, idMovie: number): Promise<number> {
    return await ActorMovieModel.destroy({
      where: {
        idActor: idActor,
        idMovie: idMovie //this will be your id that you want to delete
      }
    });
  }

}