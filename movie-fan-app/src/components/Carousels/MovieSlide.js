import React from "react";
import {Link} from 'react-router-dom'

export default function MovieSlide({ movie, media } = this.props) {
  return (
    <div className="slider-img">
    <Link to={`/details/${media}/${movie.id}`}>
    <div className="svg-container">
      <SVG/>
      <p className="svg-text">{movie.vote_average}</p>
    </div>
    </Link>
    <Link to={`/details/${media}/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
        alt={movie.title}
        className="poster-img-carousel scale-up-center"
      />
      </Link>
    </div>
    
  );
}


const SVG = () => {
 return <svg viewBox="0 0 64 64" width="16" height="16" fill="white" className="SVG">
 <path d="M 32 0 L 32 0 L 40.8167787843871 19.864745084375787 A 15 15 0 0 1 40.8167787843871 19.864745084375787 L 62.43380852144492 22.11145618000168 L 62.43380852144492 22.11145618000168 L 46.265847744427305 36.63525491562421 A 15 15 0 0 1 46.265847744427305 36.63525491562421 L 50.80912807335914 57.88854381999832 L 50.80912807335914 57.88854381999832 L 32 47 A 15 15 0 0 1 32 47 L 13.190871926640863 57.88854381999832 L 13.190871926640863 57.88854381999832 L 17.734152255572695 36.635254915624216 A 15 15 0 0 1 17.734152255572695 36.635254915624216 L 1.566191478555087 22.111456180001674 L 1.566191478555087 22.111456180001674 L 23.183221215612903 19.86474508437579 A 15 15 0 0 1 23.183221215612903 19.86474508437579 M 32 32 A 0 0 0 0 0 32 32 A 0 0 0 0 0 32 32"></path>
</svg>
}