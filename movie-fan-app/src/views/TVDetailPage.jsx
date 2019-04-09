import React from "react";
import {
  useGetTVShowById,
  useGetTVCast,
  useGetTVTrailer,
  useGetTVReviews
} from "../dummy-api/fetchingTVHooks";
import MovieDetailJumboTron from "../components/MovieDetailComponents/MovieDetailJumboTron";
import MovieDetailSummary from "../components/MovieDetailComponents/MovieDetailSummary";
import CastCarousel from "../components/Carousels/CastCarousel";
import MovieDetailTrailer from "../components/MovieDetailComponents/MovieDetailTrailer";
import MovieDetailReviews from "../components/MovieDetailComponents/MovieDetailReviews";

// displays tv detail page

export default function TVDetailPage(props) {
  const id = props.match.params.id;
  const movie = useGetTVShowById(id);
  const cast = useGetTVCast(id);
  const trailer = useGetTVTrailer(id);
  const reviews = useGetTVReviews(id);
  return (
    <div>
      <MovieDetailJumboTron movie={movie} {...props} />
      <MovieDetailSummary movie={movie} />
      <div className="home-carousel-container">
        <CastCarousel cast={cast} />
      </div>
      <MovieDetailTrailer trailer={trailer} />
      <MovieDetailReviews reviews={reviews} />
    </div>
  );
}
