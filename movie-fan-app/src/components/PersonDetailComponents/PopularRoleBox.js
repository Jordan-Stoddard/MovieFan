import React from "react";
import { reviewContent } from "../../helper-functions/displayFunctions";
import {Link} from 'react-router-dom'

export default function PopularRoleBox({ role, index, text }) {
  if (!role) {
    return (
      <div className="review-box-container">
        <div className="review-box" style={styleEven}>
          <p className="review-box-title">{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="review-box-container">
        <div className="review-box" style={index % 2 ? styleEven : styleOdd}>
          <h1 className="review-box-title">Movie: {role.title}</h1>
          <p className="review-box-text">{reviewContent(role.overview)}</p>
          <Link
            to={`/details/movie/${role.id}`}
            className="review-box-link"
          >
            See movie page <i className="fas fa-external-link-alt" />
          </Link>
        </div>
      </div>
    );
  }
}

const styleEven = {
  background: `linear-gradient(30deg, rgba(255, 255, 255, 0.003) 2%, #202020 88%)`
};

const styleOdd = {
  background: `linear-gradient(190deg, rgba(255, 255, 255, 0.003) 2%, #202020 88%)`
};