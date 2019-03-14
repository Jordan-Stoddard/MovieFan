import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const usePopular = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {

        (() => {
           axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&page=1')
           .then(res => setPopularMovies(res.data.results))
           .catch(err => console.log(err))
        })()
    }, [])
    return popularMovies
}

export const useTopRated = () => {
    const [topRated, setTopRated] = useState([])

    useEffect(() => {

        (() => {
           axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&page=1')
           .then(res => setTopRated(res.data.results))
           .catch(err => console.log(err))
        })()
    }, [])
    return topRated
}

export const useUpcoming = () => {
    const [upComing, setUpComing] = useState([])

    useEffect(() => {

        (() => {
           axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&page=1')
           .then(res => setUpComing(res.data.results))
           .catch(err => console.log(err))
        })()
    }, [])
    return upComing
}

export const useNowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([])

    useEffect(() => {

        (() => {
           axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=ce7c59deb6a7bf9b40fc57ad9e1ff469&language=en-US&page=1')
           .then(res => setNowPlaying(res.data.results))
           .catch(err => console.log(err))
        })()
    }, [])
    return nowPlaying
}

