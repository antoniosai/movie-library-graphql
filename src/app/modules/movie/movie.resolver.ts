import {
  Arg,
  Mutation,
  Query,
  Resolver
} from 'type-graphql';
import { MovieDTO } from './dto/movie.dto';
import { MovieInput } from './inputs/movie.input';
import MovieModel from './movie.model';
import { MovieService } from './movie.service';

@Resolver((_of) => MovieModel)
export class MovieResolver {

  // Initialize Service(s)
  movieService: MovieService;

  constructor() {
    // Initialize Service
    this.movieService = new MovieService();
  }

  @Query(() => [MovieModel])
  async getAllMovies(): Promise<MovieDTO[]> {
    try {
      const data: MovieDTO[] = await this.movieService.getAllMovies();
      return data;
    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
  }

  @Query((_returns) => MovieModel, { nullable: false })
  async findMovieById(@Arg('id') id: number) {
    try {
      const data: MovieDTO | null = await this.movieService.getMovieById(id);

      if(!data) {
        console.error(`Failed find Movie with id ${id}`);
        return;
      }

      return data;

    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
  }

  @Mutation(() => MovieModel)
  async insertNewMovie(
    @Arg('newMovieData') user: MovieInput
  ): Promise<MovieDTO> {
    const data: MovieDTO = await this.movieService.insertNewMovie(user);

    return data;
  }

  @Mutation(() => MovieModel)
  async updateMovie(
    @Arg('idMovie') idMovie: number,
    @Arg('updateDate') user: MovieInput
  ): Promise<MovieDTO | undefined> {
    const data: [affectedCount: number] = await this.movieService.updateMovie(idMovie, user);

    // Return an Movie if it's found
    if(data) {
      return this.findMovieById(idMovie);
    }

    return;

  }

  @Mutation(() => Number)
  async deleteMovie(
    @Arg('idMovie') idMovie: number
  ): Promise<number> {
    const data: number = await this.movieService.deleteMovie(idMovie);

    return data;
  }

}
