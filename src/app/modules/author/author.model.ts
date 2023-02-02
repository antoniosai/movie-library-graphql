import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../../config/connection";
import { AuthorDTO } from "./dto/author.dto";
import { AuthorInput } from "./inputs/author.input";

class AuthorModel extends Model<AuthorDTO, AuthorInput> implements AuthorDTO {
  public idAuthor!: number;
  public name!: string;
  public description!: string;
}

AuthorModel.init({
  idAuthor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default AuthorModel;