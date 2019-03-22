import React from 'react'

export const style = (movie) => {
  if (!movie) {
    return {background: 'transparent'}
  }
    return {background: `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original${
      movie.backdrop_path
    }) no-repeat center center`}
  }

  export const homepage = (object) => {
    if (!object.homepage) {
      return  "No homepage found"
    } else {
        return <a href={object.homepage} target="_blank" rel="noreferrer noopener">{object.homepage}</a>
    }
}

export const reviewContent = (str) => {
  let newStr = ''
  let currentLength = 0

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i]
    if(currentLength < 520) {
      newStr += currentLetter
      currentLength += 1
    } else if (currentLength > 520) {
      break;
    }
  }
  return `${newStr}...`
}

export const biographyView = (str) => {
  if (!str) {
    return <p className="summary-text-none">There is no biography for this person in our database.</p>
  } else {
    return <p className="summary-text">{str}</p>
  }
}

export const summaryView = (str) => {
  if (!str) {
    return <p className="summary-text-none">There is no summary for this movie in our database.</p>
  } else {
    return <p className="summary-text">{str}</p>
  }
}