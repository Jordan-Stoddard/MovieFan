import React, {useState} from 'react'
import image from '../assets/beach-dawn-dusk-1144176.jpg'
import TopBanner from '../components/Banners/TopBanner'
import {useGetTopic} from '../dummy-api/fetchingHooks'
import ButtonContainer from '../components/Buttons/ButtonContainer'
import TopicDisplay from '../components/TopicDisplay/TopicDisplay'


// displays now playing page

export default function NowPlaying({topic}) {
  const [page, setPage] = useState(1)
    const getMovie = useGetTopic(topic, page)
  return (
    <div>
      <TopBanner title="NOW PLAYING" image={image}/>
      <div className="separator"></div>
      <ButtonContainer page={page} setPage={setPage}/>
      <TopicDisplay getMovie={getMovie}/>
    </div>
  )
}
