import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../../config/connection";
import AuthorModel from "../author/author.model";
import { AuthorDTO } from "../author/dto/author.dto";
import { MovieDTO } from "./dto/movie.dto";
import { MovieInput } from "./inputs/movie.input";

class MovieModel extends Model<MovieDTO, MovieInput> implements MovieDTO {
  public idMovie!: number;
  public idAuthor: number;
  public genre: "mystery" | "thriller" | "comedy" | "sci-fi";
  public year: number;
  author?: AuthorDTO | undefined;
  public name!: string;
  public description!: string;
}

MovieModel.init({
  idMovie: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idAuthor: {
    type: DataTypes.INTEGER,
    allowNull: false
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
  paranoid: true
})

MovieModel.belongsTo(AuthorModel, {
  foreignKey: 'idAuthor',
  as: 'author'
});

export default MovieModel;