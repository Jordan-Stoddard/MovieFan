import React from "react";
import { useGetMovieById, useGetCast, useGetTrailer, useGetReviews } from "../dummy-api/fetchingHooks";
import MovieDetailJumboTron from '../components/MovieDetailComponents/MovieDetailJumboTron'
import MovieDetailSummary from '../components/MovieDetailComponents/MovieDetailSummary'
import CastCarousel from '../components/Carousels/CastCarousel'
import MovieDetailTrailer from '../components/MovieDetailComponents/MovieDetailTrailer'
import MovieDetailReviews from '../components/MovieDetailComponents/MovieDetailReviews'

// Displays movie detail page


export default function MovieDetailPage(props) {
  const id = props.match.params.id;
  const movie = useGetMovieById(id);
  const cast = useGetCast(id)
  const trailer = useGetTrailer(id)
  const reviews = useGetReviews(id)
  return (
    <div>
        <MovieDetailJumboTron movie={movie} {...props}/>
        <div className="movie-detail-content-container">
        <MovieDetailSummary movie={movie} />
        <div className="home-carousel-container">
        <CastCarousel cast={cast} />
        </div>
        <MovieDetailTrailer trailer={trailer}/>
        <MovieDetailReviews reviews={reviews}/>
        </div>
    </div>
  )
}
