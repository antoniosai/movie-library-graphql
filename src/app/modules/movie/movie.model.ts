import { DataTypes, Model } from "sequelize";
import { Field, ID, ObjectType } from "type-graphql";
import sequelizeConnection from "../../../config/connection";
import AuthorModel from "../author/author.model";
import { MovieDTO } from "./dto/movie.dto";
import { MovieInput } from "./inputs/movie.input";

@ObjectType({ description: 'The Movie model' })
class MovieModel extends Model<MovieDTO, MovieInput> implements MovieDTO {
  
  @Field(() => ID)
  public idMovie: number;

  @Field()
  public idAuthor: number;

  @Field()
  public name: string;
  
  @Field()
  public genre: "mystery" | "thriller" | "comedy" | "sci-fi";

  @Field()
  public year: number;
  
  @Field(() => AuthorModel)
  public author: AuthorModel;

}


MovieModel.init({
  idMovie: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idAuthor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: false,
    references: {
      model: AuthorModel,
      key: 'idAuthor'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
  sequelize: sequelizeConnection,
  modelName: "movie"
});

export default MovieModel;