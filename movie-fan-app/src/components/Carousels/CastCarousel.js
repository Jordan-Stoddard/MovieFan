import React from 'react'
import Slider from 'react-slick'
import {setCarouselSlidesOnWidth, windowWidth} from '../../helper-functions/displayFunctions'
import CastSlide from './CastSlide'
import StaticCast from './StaticCast'


export default function CastCarousel({cast}) {
  if (cast.length < 6) {
    return (
      <StaticCast cast={cast}/>
    )
  }
  return (
    <div className="small-carousel">
      <h2 className="small-carousel-genre">CAST</h2>
      <Slider slidesToShow={setCarouselSlidesOnWidth(windowWidth())} infinite className="center" swipeToSlide>
      {cast.map(cast => 
        <CastSlide cast={cast} key={cast.id}/>)}
      </Slider>
    </div>
  );
}