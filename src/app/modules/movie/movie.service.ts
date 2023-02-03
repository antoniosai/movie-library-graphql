import AuthorModel from "../author/author.model";
import { MovieDTO } from "./dto/movie.dto";
import { MovieInput } from "./inputs/movie.input";
import MovieModel from "./movie.model";

export class MovieService {

  async getAllMovies(): Promise<MovieDTO[]> {
    console.log("Fetching Data from User");
    return await MovieModel.findAll({
      where: {},
      include: [
        {
          model: AuthorModel,
          as: "author"
        }
      ]
    });
  }

  async getMovieById(idMovie: number): Promise<MovieDTO | null> {
    const response: MovieDTO | null = await MovieModel.findByPk(idMovie);

    return response;
  }

  async insertNewMovie(movieInput: MovieInput): Promise<MovieDTO> {
    const response: MovieDTO | null = await MovieModel.create(movieInput);

    return response;
  }

  async updateMovie(idMovie: number, movieInput: MovieInput): Promise<[affectedCount: number]> {
    const response: [affectedCount: number] = await MovieModel.update(movieInput, {
      where: { idMovie: idMovie }
    });

    return response;
  }

}