import ActorModel from "../../modules/actor/actor.model";
import ActorMovieModel from "../../modules/actormovie/actormovie.model";
import AuthorModel from "../../modules/author/author.model";
import MovieModel from "../../modules/movie/movie.model";

const dbInit = () => Promise.all([
  AuthorModel.sync().then(() => {
    AuthorModel.hasMany(MovieModel, {
      // Associate with Relations
      foreignKey: 'idAuthor',
      as: 'movies'
    });
  }),
  MovieModel.sync().then(() => {
    // Associate with Relations
    MovieModel.belongsTo(AuthorModel, {
      foreignKey: 'idAuthor',
      targetKey: 'idAuthor',
      as: 'author'
    });
  }),
  ActorModel.sync().then(() => {
  }),
  ActorMovieModel.sync(),
]);

export { dbInit };
