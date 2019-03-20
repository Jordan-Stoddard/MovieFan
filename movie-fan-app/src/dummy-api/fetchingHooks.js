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
  }, [page]);
  return getMovies;
};

export const useGetMovieById = (id) => {
  const [getMovie, setGetMovie] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
      )
      .then(res => setGetMovie(res.data))
      .catch(err => console.log(err))
    })()
  }, [])
  return getMovie
}

export const useGetCast = (id) => {
  const [getCast, setGetCast] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
      )
      .then(res => {
        const filteredCast = res.data.cast.filter(person => person.order < 15 && person.profile_path)
        setGetCast(filteredCast)
      })
      .catch(err => console.log(err))
    })()
  }, [])
  return getCast
}

export const useGetTrailer = (id) => {
  const [getTrailer, setGetTrailer] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
      )
      .then(res => {
        const filteredTrailers = res.data.results.filter(trailer => trailer.type === "Trailer")
        setGetTrailer(filteredTrailers[0])
      })
      .catch(err => console.log(err))
    })()
  }, [])
  return getTrailer
}

export const useGetReviews = (id) => {
  const [getReviews, setGetReviews] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
      )
      .then(res => {
        setGetReviews(res.data.results)
      })
      .catch(err => console.log(err))
    })()
  }, [])
  return getReviews
}