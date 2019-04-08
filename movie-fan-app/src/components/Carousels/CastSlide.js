import React from "react";
import {Link} from 'react-router-dom'

export default function CastSlide({ cast } = this.props) {
  return (
    <div className="cast-img">
    
    <Link to={`/details/people/${cast.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
        alt={cast.name}
        className="cast-img-carousel"
      />
      <p className="cast-text-carousel">{cast.name}</p>
      </Link>
    </div>
  );
}