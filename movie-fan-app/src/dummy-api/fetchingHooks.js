import { useState, useEffect } from 'react'
import axios from "axios";

//////// MOVIE END POINTS /////////
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
        if (res.data.results.length === 0) {
          setGetTrailer(res.data.results)
        } else {
          const filteredTrailers = res.data.results.filter(trailer => trailer.type === "Trailer")
          setGetTrailer(filteredTrailers[0])
        }
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

export const useGetPerson = (id) => {
  const [getPerson, setGetPerson] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
      )
      .then(res => {
        setGetPerson(res.data)
      })
      .catch(err => console.log(err))
    })()
  }, [])
  return getPerson
}

export const useGetPersonRoles = (id) => {
  const [getPersonRoles, setGetPersonRoles] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US`
      )
      .then(res => {
        setGetPersonRoles(res.data.cast)
      })
      .catch(err => console.log(err))
    })()
  }, [])
  return getPersonRoles
}

export const useGetSearch = (str) => {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    (() => {
      axios.get(
        `http://api.themoviedb.org/3/search/movie?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&query=${str}`
      )
      .then(res => {
        setSearchResults(res.data.results)
      })
      .catch(err => console.log(err))
    })()
  }, [str])
  return searchResults
}