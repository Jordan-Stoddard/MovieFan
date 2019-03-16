import React from 'react'
import TopBanner from '../components/Banners/TopBanner'
import image from '../assets/beach-dawn-dusk-1144176.jpg'

export default function NowPlaying() {
  return (
    <div>
      <TopBanner title="NOW PLAYING" image={image}/>
    </div>
  )
}
