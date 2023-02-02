import AuthorModel from "./author.model";
import { AuthorDTO } from "./dto/author.dto";
import { AuthorInput } from "./inputs/author.input";

export class AuthorService {

  async getAllAuthors(): Promise<AuthorDTO[]> {
    console.log("Fetching Data from User");
    return await AuthorModel.findAll();
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

}