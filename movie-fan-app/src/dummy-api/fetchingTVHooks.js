import { useState, useEffect } from 'react'
import axios from "axios";

//////// TV END POINTS /////////

export const useGetTopic = () => {
    const [getTVTrending, setGetTVTrending] = useState([]);
  
    useEffect(() => {
      (() => {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/movie/week?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&sort_by=popularity.desc"
          )
          .then(res => setGetTVTrending(res.data.results))
          .catch(err => console.log(err));
      })();
    }, []);
    return getTVTrending;
  };