import ActorModel from "./actor.model";
import { ActorDTO } from "./dto/actor.dto";
import { ActorInput } from "./inputs/actor.input";

export class ActorService {

  async getAllActors(): Promise<ActorDTO[]> {
    console.log("Fetching Data from User");
    return await ActorModel.findAll();
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

}