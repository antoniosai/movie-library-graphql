import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../../config/connection";
import { ActorDTO } from "./dto/actor.dto";
import { ActorInput } from "./inputs/actor.input";

class ActorModel extends Model<ActorDTO, ActorInput> implements ActorDTO {
  public idActor!: number;
  public name!: string;
  public gender!: "male" | "female";
  public nationality!: string;
  public birthPlace!: string;
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
    unique: true
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
  paranoid: true
})

export default ActorModel;