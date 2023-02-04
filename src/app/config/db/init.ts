import ActorModel from "../../modules/actor/actor.model";
import ActorMovieModel from "../../modules/actormovie/actormovie.model";
import AuthorModel from "../../modules/author/author.model";
import MovieModel from "../../modules/movie/movie.model";

const dbInit = () => {
  Promise.all([
    AuthorModel.sync(),
    MovieModel.sync(),
    ActorModel.sync(),
    ActorMovieModel.sync(),
  ]).then(() => {

    // Associate with Relations
    AuthorModel.hasMany(MovieModel, {
      foreignKey: 'idAuthor',
      as: 'movies',
    });
    
    // Associate with Relations
    MovieModel.belongsTo(AuthorModel, {
      foreignKey: 'idAuthor',
      targetKey: 'idAuthor',
      as: 'author'
    });
    
    ActorModel.hasMany(ActorMovieModel, {
      foreignKey: 'idActor',
      as: 'actorMovie'
    });

    MovieModel.hasMany(ActorMovieModel, {
      foreignKey: 'idMovie',
      as: 'movieActor'
    });

    ActorMovieModel.belongsTo(ActorModel, {
      foreignKey: 'idActor',
      as: 'actor'
    });

    ActorMovieModel.belongsTo(MovieModel, {
      foreignKey: 'idMovie',
      as: 'movie'
    });
  });
} 

export { dbInit };
