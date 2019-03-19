import React from 'react'

export const style = (movie) => {
    return {background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original${
      movie.backdrop_path
    }) no-repeat center center`}
  }

  export const homepage = (movie) => {
    if (!movie.homepage) {
      return  "No homepage found"
    } else {
        return <a href={movie.homepage} target="_blank" rel="noreferrer noopener">{movie.homepage}</a>
    }
}