import MovieModel from "../movie/movie.model";
import AuthorModel from "./author.model";
import { AuthorDTO } from "./dto/author.dto";
import { AuthorInput } from "./inputs/author.input";

export class AuthorService {

  async getAllAuthors(): Promise<AuthorDTO[]> {
    return await AuthorModel.findAll({
      where: {},
      include: {
        model: MovieModel,
        as: "movies"
      }
    });
  }

  async getAuthorById(idAuthor: number): Promise<AuthorDTO | null> {
    const response: AuthorDTO | null = await AuthorModel.findByPk(idAuthor);

    return response;
  }

  async insertNewAuthor(authorInput: AuthorInput): Promise<AuthorDTO> {
    const response: AuthorDTO | null = await AuthorModel.create(authorInput);

    return response;
  }

  async updateAuthor(idAuthor: number, authorInput: AuthorInput): Promise<[affectedCount: number]> {
    const response: [affectedCount: number] = await AuthorModel.update(authorInput, {
      where: { idAuthor: idAuthor }
    });

    return response;
  }

  async deleteActor(idAuthor: number): Promise<number> {
    return await AuthorModel.destroy({
      where: {
        idAuthor: idAuthor
      }
    });
  }

}