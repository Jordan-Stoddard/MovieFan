import React from 'react'

export default function MovieDetailTrailer({trailer}) {
  return (
    <div className="trailer-container">
    <h1 className="trailer-title">{trailer.key ? 'TRAILER' : 'No trailer found'}</h1>
     {trailer.key && <iframe className="youtube-video" width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={`${trailer.name}`}></iframe>} 
    </div>
  )
}
