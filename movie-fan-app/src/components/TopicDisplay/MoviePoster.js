import React from "react";
import { genreDB } from "../../dummy-api/genre-data";
import {Link, withRouter} from 'react-router-dom'
import {tvOrMovie} from '../../helper-functions/displayFunctions'

function MoviePoster({movie: { poster_path, title, genre_ids, id, name }, location}) {
  const genres = genreDB.map(genre => {
    if (genre.id === genre_ids[0]) {
      return (
        <p key={genre.id} className="movie-poster-genre">
          {genre.name}
        </p>
      );
    }
    return null;
  });

  return !poster_path ? (
    null
  ) : (
    <div className="movie-poster">
    <Link to={`/details/${tvOrMovie(location.pathname)}/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt={!title ? name : title}
        className="poster-img-carousel"
      />
      </Link>
      <h1 className="movie-poster-title">{!title ? name : title}</h1>
      {genres}
    </div>
  );
}



export default withRouter(MoviePoster)