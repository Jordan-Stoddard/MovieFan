import React from "react";
import { style, homepage } from "../../helper-functions/displayFunctions";

export default function PersonDetailJumboTron({
  person,
  personRoles,
  history
}) {
  return (
    <div>
      <div>
        <div className="movie-detail-jumbo-img" style={style(personRoles[0])}>
          <div className="movie-detail-jumbo-info-container">
            <i
              onClick={history.goBack}
              className="fas fa-angle-left fa-5x back-arrow"
            />

            <div className="movie-detail-jumbo-content">
              <img
                src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                alt={person.name}
                className="movie-detail-jumbo-poster"
              />

              <div className="movie-detail-jumbo-text">
                <h1 className="movie-detail-jumbo-title">{person.name}</h1>
                <p className="movie-detail-jumbo-rating">{`Popularity Rating: ${Math.floor(
                  person.popularity
                )}`}</p>
                <p className="movie-detail-jumbo-link">
                  <i className="fas fa-external-link-alt" />
                  {homepage(person)}
                </p>
                <p className="movie-detail-jumbo-tagline">{`Birthplace: ${
                  person.place_of_birth
                }`}</p>
                <p className="movie-detail-jumbo-tagline">{`Birth Date: ${person.birthday}`}</p>
                <p className="movie-detail-jumbo-tagline">{`Gender: ${person.gender === 1 ? "Female" : "Male"}`}</p>
                <p className="movie-detail-jumbo-tagline">{`Known for: ${person.known_for_department}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
