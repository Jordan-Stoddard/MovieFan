import React, {useState, useEffect} from "react";
import HomeCarousel from '../components/Carousels/HomeCarousel'
import HomeJumboTron from '../components/HomeComponents/HomeJumbotron'
import axios from 'axios'


export default function Home() {
  const [trending, setTrending] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&sort_by=popularity.desc')
    .then(res => setTrending(res.data.results))
  }, [])


  return (
    <div>
    {trending.length !== 0 ? <HomeCarousel trending={trending}/> : <div>loading...</div>}
    <HomeJumboTron fluid/>
    
    </div>
  );
}
