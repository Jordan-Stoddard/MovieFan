import React from 'react'
import Slider from 'react-slick'
import {useUpcoming} from '../../dummy-api/fetchingHooks'
import MovieSlide from './MovieSlide'

export default function PopularCarousel() {
  const upcomingMovies = useUpcoming()
  
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">UPCOMING</h2>
      <Slider slidesToShow={6} infinite className="center">
      {upcomingMovies.map(movie => 
        <MovieSlide movie={movie} key={movie.id}/>)}
      </Slider>
    </div>
  );
}
