import React from 'react'
import Slider from 'react-slick'
import {useTopRated} from '../../dummy-api/fetchingHooks'
import MovieSlide from './MovieSlide'

export default function PopularCarousel() {
  const topRatedMovies = useTopRated()
  
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">TOP RATED</h2>
      <Slider slidesToShow={6} infinite className="center">
      {topRatedMovies.map(movie => 
        <MovieSlide movie={movie} key={movie.id}/>)}
      </Slider>
    </div>
  );
}
