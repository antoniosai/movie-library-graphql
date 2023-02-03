import { DataTypes, Model } from "sequelize";
import { Field, ID, ObjectType } from "type-graphql";
import sequelizeConnection from "../../config/connection";
import { MovieDTO } from "../movie/dto/movie.dto";
import MovieModel from "../movie/movie.model";
import { AuthorDTO } from "./dto/author.dto";
import { AuthorInput } from "./inputs/author.input";

@ObjectType({ description: 'The Categories model' })
class AuthorModel extends Model<AuthorDTO, AuthorInput> implements AuthorDTO {

  @Field(() => ID)
  public idAuthor!: number;

  @Field()
  public name!: string;

  @Field()
  public description!: string;

  @Field(() => [MovieModel])
  public movies?: MovieModel[] | MovieDTO[];
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
  modelName: 'authors'
});



export default AuthorModel;