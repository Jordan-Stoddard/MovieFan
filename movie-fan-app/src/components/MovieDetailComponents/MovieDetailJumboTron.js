import React from "react";
import { style, homepage } from "../../helper-functions/displayFunctions";

export default function MovieDetailJumboTron({ movie, history }) {
  return (
    <div>
      <div className="movie-detail-jumbo-img" style={style(movie)}>

        <div className="movie-detail-jumbo-info-container">
          <i
            onClick={history.goBack}
            className="fas fa-angle-left fa-5x back-arrow"
          />

          <div className="movie-detail-jumbo-content">
            <img
              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
              alt={movie.title}
              className="movie-detail-jumbo-poster"
            />

            <div className="movie-detail-jumbo-text">
              <h1 className="movie-detail-jumbo-title">{movie.title}</h1>
              <p className="movie-detail-jumbo-rating">{`Rating | ${movie.vote_average} out of 10`}</p>
              <p className="movie-detail-jumbo-link"><i className="fas fa-external-link-alt"></i>{homepage(movie)}</p>
              <p className="movie-detail-jumbo-tagline">{movie.tagline}</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
