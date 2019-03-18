import React from 'react'
import MoviePoster from './MoviePoster'

export default function TopicDisplay({getMovie}) {
   
  return (
    <section className="movie-poster-container">
      {getMovie.map(movie => {
        return <MoviePoster movie={movie} key={movie.id}/>
      })}
    </section >
  )
}
