import ActorModel from "./actor.model";
import { ActorDTO } from "./dto/actor.dto";

export class ActorService {

  async getAllActors(): Promise<ActorDTO[]> {
    console.log("Fetching Data from User");
    return await ActorModel.findAll();
  }

}