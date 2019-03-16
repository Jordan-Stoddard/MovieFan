import React, {useState, useEffect} from "react";
import HomeCarousel from '../components/Carousels/HomeCarousel'
import HomeJumboTron from '../components/HomeComponents/HomeJumbotron'
import SmallMovieCarousel from '../components/Carousels/SmallMovieCarousel'
import axios from 'axios'


export default function Home() {
  const [trending, setTrending] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&sort_by=popularity.desc')
    .then(res => setTrending(res.data.results))
  }, [])


  return (
    <div>
    <HomeCarousel trending={trending}/>
    <HomeJumboTron fluid/>
    <SmallMovieCarousel topic="popular"/>
    <SmallMovieCarousel topic="top_rated"/>
    <SmallMovieCarousel topic="upcoming"/>
    <SmallMovieCarousel topic="now_playing"/>
    
    </div>
  );
}
