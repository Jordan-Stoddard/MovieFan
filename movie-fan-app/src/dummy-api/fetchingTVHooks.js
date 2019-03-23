import { useState, useEffect } from 'react'
import axios from "axios";

//////// TV END POINTS /////////

export const useGetTVTrending = () => {
    const [getTVTrending, setGetTVTrending] = useState([]);
  
    useEffect(() => {
      (() => {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/tv/week?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&sort_by=popularity.desc"
          )
          .then(res => setGetTVTrending(res.data.results))
          .catch(err => console.log(err));
      })();
    }, []);
    return getTVTrending;
  };

  export const useGetTVTopic = (topic, page) => {
    const [getTVShows, setGetTVShows] = useState([]);
  
    useEffect(() => {
      (() => {
        axios
          .get(
            `https://api.themoviedb.org/3/tv/${topic}?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&page=${page}`
          )
          .then(res => {
            const filteredResults = res.data.results.filter(show => show.poster_path)
            setGetTVShows(filteredResults)})
          .catch(err => console.log(err));
      })();
    }, [page]);
    return getTVShows;
  };

  export const useGetTVShowById = (id) => {
    const [getTVShow, setGetTVShow] = useState([])
  
    useEffect(() => {
      (() => {
        axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
        )
        .then(res => setGetTVShow(res.data))
        .catch(err => console.log(err))
      })()
    }, [])
    return getTVShow
  }

  export const useGetTVCast = (id) => {
    
    const [getCast, setGetCast] = useState([])
  
    useEffect(() => {
      (() => {
        axios.get(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
        )
        .then(res => {
          const filteredCast = res.data.cast.filter(person => person.profile_path)
          setGetCast(filteredCast)
        })
        .catch(err => console.log(err))
      })()
    }, [])
    return getCast
  }


  export const useGetTVTrailer = (id) => {
    const [getTVTrailer, setGetTVTrailer] = useState([])
  
    useEffect(() => {
      (() => {
        axios.get(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
        )
        .then(res => {
          if (res.data.results.length === 0) {
            setGetTVTrailer(res.data.results)
          } else {
            const filteredTrailers = res.data.results.filter(trailer => trailer.type === "Trailer")
            setGetTVTrailer(filteredTrailers[0])
          }
          
        })
        .catch(err => console.log(err))
      })()
    }, [])
    return getTVTrailer
  }

  export const useGetTVReviews = (id) => {
    const [getTVReviews, setGetTVReviews] = useState([])
  
    useEffect(() => {
      (() => {
        axios.get(
          `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
        )
        .then(res => {
          setGetTVReviews(res.data.results)
        })
        .catch(err => console.log(err))
      })()
    }, [])
    return getTVReviews
  }

  export const useGetTVSearch = (str) => {
    const [searchTVResults, setSearchTVResults] = useState([])
  
    useEffect(() => {
      (() => {
        axios.get(
          `http://api.themoviedb.org/3/search/tv?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&query=${str}`
        )
        .then(res => {
          setSearchTVResults(res.data.results)
        })
        .catch(err => console.log(err))
      })()
    }, [str])
    return searchTVResults
  }