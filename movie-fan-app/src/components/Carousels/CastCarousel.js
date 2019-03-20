import React from 'react'
import Slider from 'react-slick'
import CastSlide from './CastSlide'

export default function CastCarousel({cast}) {
  
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">CAST</h2>
      <Slider slidesToShow={5} infinite className="center" swipeToSlide>
      {cast.map(cast => 
        <CastSlide cast={cast} key={cast.id}/>)}
      </Slider>
    </div>
  );
}