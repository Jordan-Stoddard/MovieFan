import React from 'react'
import Slider from 'react-slick'
import {useGetTVTopic} from '../../dummy-api/fetchingTVHooks'
import MovieSlide from './MovieSlide'

export default function SmallMovieCarousel({topic, genre, media}) {
  const TVShows = useGetTVTopic(topic)
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">{genre}</h2>
      <Slider slidesToShow={6} infinite className="center" swipeToSlide>
      {TVShows.map(movie => 
        <MovieSlide movie={movie} key={movie.id} media={media}/>)}
      </Slider>
    </div>
  );
}