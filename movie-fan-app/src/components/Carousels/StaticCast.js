import React from "react";
import { Link } from "react-router-dom";

export default function StaticCast({ cast }) {
  if(cast.length === 0) {
    return (
      <div className="small-carousel">
      <h2 className="small-carousel-genre">No Cast Found</h2>
      </div>
    )
  }
  return (
    <div>
      <h2 className="static-cast-title">CAST</h2>
      <div className="static-cast-container">
        {cast.map(cast => {
          return (
            <div key={cast.id} className="cast-img-container">
              <Link
                to={`/details/people/${cast.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                  alt={cast.name}
                  className="static-cast-img"
                />
              </Link>
              <p className="static-cast-text">{cast.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
