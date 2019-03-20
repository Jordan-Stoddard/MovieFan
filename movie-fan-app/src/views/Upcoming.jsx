import React, {useState} from 'react'
import image from '../assets/pexels-photo-1282315.jpeg'
import TopBanner from '../components/Banners/TopBanner'
import {useGetTopic} from '../dummy-api/fetchingHooks'
import ButtonContainer from '../components/Buttons/ButtonContainer'
import TopicDisplay from '../components/TopicDisplay/TopicDisplay'


export default function Upcoming({topic}) {
  const [page, setPage] = useState(1)
    const getMovie = useGetTopic(topic, page)
  return (
    <div>
      <TopBanner title="UPCOMING" image={image}/>
      <div className="separator"></div>
      <ButtonContainer page={page} setPage={setPage}/>
      <TopicDisplay getMovie={getMovie}/>
    </div>
  )
}
