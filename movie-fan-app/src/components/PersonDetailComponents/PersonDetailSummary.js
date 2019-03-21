import React from 'react'
import {summaryView} from '../../helper-functions/displayFunctions'

export default function PersonDetailSummary({person: {biography}}) {
    return (
      <div className="summary-container">
        <h1 className="summary-title">Biography</h1>
        {summaryView(biography)}
      </div>
    )
  }