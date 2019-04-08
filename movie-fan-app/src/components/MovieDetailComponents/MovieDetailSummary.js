import React from 'react'
import {summaryView} from '../../helper-functions/displayFunctions'

export default function MovieDetailSummary({movie: {overview}}) {
  return (
    <div className="summary-container">
      <h1 className="summary-title">Summary</h1>
      {summaryView(overview)}
    </div>
  )
}
