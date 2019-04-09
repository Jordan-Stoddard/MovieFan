import React, {useState} from 'react'
import TopBanner from '../components/Banners/TopBanner'
import image from '../assets/beach-idyllic-island-690303.jpg'
import {useGetTopic} from '../dummy-api/fetchingHooks'
import ButtonContainer from '../components/Buttons/ButtonContainer'
import TopicDisplay from '../components/TopicDisplay/TopicDisplay'

// displays top rated page

export default function TopRated({topic}) {
  const [page, setPage] = useState(1)
    const getMovie = useGetTopic(topic, page)
  return (
    <div>
      <TopBanner title='TOP RATED' image={image}/>
      <div className="separator"></div>
      <ButtonContainer page={page} setPage={setPage}/>
      <TopicDisplay getMovie={getMovie}/>
    </div>
  )
}
