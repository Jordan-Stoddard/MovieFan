import React from "react";
import { style, homepage } from "../../helper-functions/displayFunctions";
import Loader from 'react-loader-spinner'

export default function MovieDetailJumboTron({ movie, history }) {
 return !movie ? (
    <div className="movie-detail-jumbo-img" style={style(movie)}>
      <div className="loader">
        <Loader type="Oval" color="#fff" height="100" width="100" />
      </div>
    </div>
  ) : (
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
              <p className="movie-detail-jumbo-rating">{`Rating | ${
                movie.vote_average
              } out of 10`}</p>
              <p className="movie-detail-jumbo-link">
                <i className="fas fa-external-link-alt" />
                {homepage(movie)}
              </p>
              <p className="movie-detail-jumbo-tagline">{movie.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
