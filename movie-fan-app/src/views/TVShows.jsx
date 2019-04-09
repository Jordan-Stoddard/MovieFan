import React from 'react'
import HomeCarousel from '../components/Carousels/HomeCarousel'
import SmallTVCarousel from '../components/Carousels/SmallTVCarousel'
import {useGetTVTrending} from '../dummy-api/fetchingTVHooks'

// displays tv shows page


export default function TVShows() {
  const trending = useGetTVTrending()
  return (
    <div>
      <HomeCarousel trending={trending} topic="tv"/>
      <div className="home-carousel-container">
        <SmallTVCarousel topic="airing_today" page="1" genre="AIRING TODAY" media="tv"/>
        <SmallTVCarousel topic="on_the_air" page="1" genre="ON THE AIR" media="tv"/>
        <SmallTVCarousel topic="popular" page="1" genre="POPULAR" media="tv"/>
        <SmallTVCarousel topic="top_rated" page="1" genre="TOP RATED" media="tv"/>
      </div>
    </div>
  )
}
