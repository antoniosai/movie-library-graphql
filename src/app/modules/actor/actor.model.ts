import { DataTypes, Model } from "sequelize";
import { Field, ID, ObjectType } from "type-graphql";
import sequelizeConnection from "../../../config/connection";
import ActorMovieModel from "../actormovie/actormovie.model";
import MovieModel from "../movie/movie.model";
import { ActorDTO } from "./dto/actor.dto";
import { ActorInput } from "./inputs/actor.input";

@ObjectType({ description: 'The Actor model' })
class ActorModel extends Model<ActorDTO, ActorInput> implements ActorDTO {

  @Field(() => ID)
  public idActor!: number;
  
  @Field()
  public name!: string;

  @Field()
  public gender!: "male" | "female";

  @Field()
  public nationality!: string;

  @Field()
  public birthPlace!: string;

  @Field()
  public birthDate!: Date;
}

ActorModel.init({
  idActor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING
  },
  birthPlace: {
    type: DataTypes.STRING
  },
  birthDate: {
    type: DataTypes.DATE
  },
}, {
  timestamps: false,
  sequelize: sequelizeConnection,
  paranoid: true,
  modelName: 'actors'
});

// Many-to-Many Relationships
ActorModel.belongsToMany(MovieModel, {
  through: ActorMovieModel,
});

export default ActorModel;