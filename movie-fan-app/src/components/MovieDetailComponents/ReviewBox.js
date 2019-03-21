import React from "react";
import { reviewContent } from "../../helper-functions/displayFunctions";

export default function ReviewBox({ review, index, text }) {
  if (!review) {
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
          <h1 className="review-box-title">{review.author}</h1>
          <p className="review-box-text">{reviewContent(review.content)}</p>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={review.url}
            className="review-box-link"
          >
            See full review <i className="fas fa-external-link-alt" />
          </a>
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
