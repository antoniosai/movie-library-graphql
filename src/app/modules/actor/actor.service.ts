import ActorModel from "./actor.model";
import { ActorDTO } from "./dto/actor.dto";

export class ActorService {

  async getAllActors(): Promise<ActorDTO[]> {
    return await ActorModel.findAll();
  }

}