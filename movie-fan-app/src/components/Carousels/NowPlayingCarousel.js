import React from 'react'
import Slider from 'react-slick'
import {useNowPlaying} from '../../dummy-api/fetchingHooks'
import MovieSlide from './MovieSlide'

export default function PopularCarousel() {
  const nowPlayingMovies = useNowPlaying()
  
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">NOW PLAYING</h2>
      <Slider slidesToShow={6} infinite className="center">
      {nowPlayingMovies.map(movie => 
        <MovieSlide movie={movie} key={movie.id}/>)}
      </Slider>
    </div>
  );
}
