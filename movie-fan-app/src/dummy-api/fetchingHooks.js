import { useState, useEffect } from 'react'
import axios from "axios";


export const useGetTopic = (topic, page) => {
  const [getMovies, setGetMovies] = useState([]);

  useEffect(() => {
    (() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${topic}?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&page=${page}`
        )
        .then(res => setGetMovies(res.data.results))
        .catch(err => console.log(err));
    })();
  }, []);
  return getMovies;
};