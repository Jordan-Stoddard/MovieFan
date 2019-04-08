import React from 'react'

export default function MovieDetailTrailer({trailer}) {
  return (
    <div className="trailer-container">
    <h1 className="trailer-title">{trailer && trailer.length !== 0 ? 'TRAILER' : ''}</h1>
     {trailer && trailer.length !== 0 ? <iframe className="youtube-video" width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={`${trailer.name}`}></iframe> : null} 
    </div>
  )
}
