import React from "react";
import { genreDB } from "../../dummy-api/genre-data";
import {Link} from 'react-router-dom'

export default function MoviePoster({
  movie: { poster_path, title, genre_ids, id }
}) {
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
    <div className="movie-poster">
      <div className="poster-img-carousel">
      <p className="movie-poster-unavailable">Image Not Available</p>
      </div>
      <h1 className="movie-poster-title">{title}</h1>
      {genres}
    </div>
  ) : (
    <div className="movie-poster">
    <Link to={`/details/movie/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w154${poster_path}`}
        alt={title}
        className="poster-img-carousel"
      />
      </Link>
      <h1 className="movie-poster-title">{title}</h1>
      {genres}
    </div>
  );
}
