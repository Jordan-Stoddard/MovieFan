import React from 'react'

export default function MovieDetailSummary({movie: {overview}}) {
  return (
    <div className="summary-container">
      <h1 className="summary-title">Summary</h1>
      <p className="summary-text">{overview}</p>
    </div>
  )
}
