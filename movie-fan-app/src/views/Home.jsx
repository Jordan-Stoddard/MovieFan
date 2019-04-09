import React, { useState, useEffect } from "react";
import HomeCarousel from "../components/Carousels/HomeCarousel";
import HomeJumboTron from "../components/HomeComponents/HomeJumbotron";
import SmallMovieCarousel from "../components/Carousels/SmallMovieCarousel";
import axios from "axios";

// Displays homepage

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&sort_by=popularity.desc"
      )
      .then(res => setTrending(res.data.results));
  }, []);

  return (
    <div>
      <HomeCarousel trending={trending} topic="movie"/>
      <HomeJumboTron fluid />
      <div className="home-carousel-container">
        <SmallMovieCarousel topic="popular" page="1" genre="POPULAR" media="movie"/>
        <SmallMovieCarousel topic="top_rated" page="1" genre="TOP RATED" media="movie"/>
        <SmallMovieCarousel topic="upcoming" page="1" genre="UPCOMING" media="movie"/>
        <SmallMovieCarousel topic="now_playing" page="1" genre="NOW PLAYING" media="movie"/>
      </div>
    </div>
  );
}
