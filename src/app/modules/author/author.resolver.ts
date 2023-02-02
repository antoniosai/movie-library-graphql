import {
  Arg,
  Mutation,
  Query,
  Resolver
} from 'type-graphql';
import { AuthorEntity } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorDTO } from './dto/author.dto';
import { AuthorInput } from './inputs/author.input';

@Resolver((_of) => AuthorEntity)
export class AuthorResolver {

  // Initialize Service(s)
  authorService: AuthorService;

  constructor() {
    // Initialize Service
    this.authorService = new AuthorService();
  }

  @Query(() => [AuthorEntity])
  async getAllAuthors(): Promise<AuthorDTO[]> {
    try {
      const data: AuthorDTO[] = await this.authorService.getAllAuthors();
      return data;
    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
  }

  @Query((_returns) => AuthorEntity, { nullable: false })
  async findAuthorById(@Arg('id') id: number) {
    try {
      const data: AuthorDTO | null = await this.authorService.getAuthorById(id);

      if(!data) {
        console.error(`Failed find Author with id ${id}`);
        return;
      }

      return data;

    } catch (err) {
      console.error("Error => ", err);
      throw new err;
    }
  }

  @Mutation(() => AuthorEntity)
  async insertNewAuthor(
    @Arg('newUserData') user: AuthorInput
  ): Promise<AuthorDTO> {
    const data: AuthorDTO = await this.authorService.insertNewAuthor(user);

    return data;
  }

  @Mutation(() => AuthorEntity)
  async updateAuthor(
    @Arg('idAuthor') idAuthor: number,
    @Arg('updateDate') user: AuthorInput
  ): Promise<AuthorDTO | undefined> {
    const data: [affectedCount: number] = await this.authorService.updateAuthor(idAuthor, user);

    // Return an Author if it's found
    if(data) {
      return this.findAuthorById(idAuthor);
    }

    return;

  }

}
