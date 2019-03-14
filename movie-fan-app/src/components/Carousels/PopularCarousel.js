import React from 'react'
import Slider from 'react-slick'
import {usePopular} from '../../dummy-api/fetchingHooks'
import MovieSlide from './MovieSlide'

export default function PopularCarousel() {
  const popularMovies = usePopular()
  
  return (
    <div className="small-carousel">
      <h2>Swipe To Slide</h2>
      <Slider slidesToShow={5} infinite className="center">
      {popularMovies.map(movie => 
        <MovieSlide movie={movie} key={movie.id}/>)}
      </Slider>
    </div>
  );
}
