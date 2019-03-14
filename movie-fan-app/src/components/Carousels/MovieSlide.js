import React from 'react'

export default function MovieSlide({movie} = this.props) {
  return (
    <div className="slider-img">
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=""/>
    </div>
  )
}
