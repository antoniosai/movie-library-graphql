import ActorMovieModel from "../actormovie/actormovie.model";
import MovieModel from "../movie/movie.model";
import ActorModel from "./actor.model";
import { ActorDTO } from "./dto/actor.dto";
import { ActorInput } from "./inputs/actor.input";

export class ActorService {

  async getAllActors(): Promise<ActorDTO[]> {
    return await ActorModel.findAll({
      where: {},
      include: [
        {
          model: ActorMovieModel,
          as: "actorMovie",
          include: [
            {
              model: MovieModel,
              as: "movie",
            },
            {
              model: ActorModel,
              as: "actor",
            },
          ]
        }
      ],
    });
  }

  async getActorById(idActor: number): Promise<ActorDTO | null> {
    const response: ActorDTO | null = await ActorModel.findByPk(idActor);

    return response;
  }

  async insertNewActor(actorInput: ActorInput): Promise<ActorDTO> {
    const response: ActorDTO | null = await ActorModel.create(actorInput);

    return response;
  }

  async updateActor(idActor: number, actorInput: ActorInput): Promise<[affectedCount: number]> {
    const response: [affectedCount: number] = await ActorModel.update(actorInput, {
      where: { idActor: idActor }
    });

    return response;
  }

  async deleteActor(idActor: number): Promise<number> {
    return await ActorModel.destroy({
      where: {
        idActor: idActor
      }
    });
  }

}