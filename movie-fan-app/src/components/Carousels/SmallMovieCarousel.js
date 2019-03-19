import React from 'react'
import Slider from 'react-slick'
import {useGetTopic} from '../../dummy-api/fetchingHooks'
import MovieSlide from './MovieSlide'

export default function SmallMovieCarousel({topic, genre}) {
  const getMovies = useGetTopic(topic)
  
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">{genre}</h2>
      <Slider slidesToShow={6} infinite className="center" swipeToSlide>
      {getMovies.map(movie => 
        <MovieSlide movie={movie} key={movie.id}/>)}
      </Slider>
    </div>
  );
}
