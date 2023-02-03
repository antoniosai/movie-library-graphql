import { DataTypes, Model } from "sequelize";
import { Field, ID, ObjectType } from "type-graphql";
import sequelizeConnection from "../../../config/connection";
import ActorModel from "../actor/actor.model";
import MovieModel from "../movie/movie.model";
import { ActorMovieDTO } from "./dto/actormovie.dto";
import { ActorMovieInput } from "./inputs/actormovie.input";

@ObjectType({ description: "The Relation Actor Movie Model" })
class ActorMovieModel extends Model<ActorMovieDTO, ActorMovieInput> implements ActorMovieDTO {

  @Field(() => ID)
  public idActorMovie!: number;

  @Field()
  public idActor: number;

  @Field()
  public idMovie: number;

  // @Field()
  // public movie?: MovieModel;

  // @Field()
  // public author?: AuthorModel;
}

ActorMovieModel.init({
  idActorMovie: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idActor: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    references: {
      model: ActorModel,
      key: 'idActor',
    }, 
  },
  idMovie: {
    type: DataTypes.INTEGER,
    primaryKey: false,
    references: {
      model: MovieModel,
      key: 'idMovie',
    },
  },
}, {
  timestamps: false,
  sequelize: sequelizeConnection,
  paranoid: true,
});



export default ActorMovieModel;