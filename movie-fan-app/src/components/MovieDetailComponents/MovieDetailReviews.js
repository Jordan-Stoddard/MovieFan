import React from 'react'
import ReviewBox from './ReviewBox'

export default function MovieDetailReviews({reviews}) {
  return (
    <div className="trailer-container">
      <h1 className="trailer-title">POPULAR REVIEWS</h1>
      {reviews.map((review, index) => 
        <ReviewBox review={review} key={review.id} index={index}/>
        )}
    </div>
  )
}
