import React from "react";
import image from "../assets/book-books-bookshelf-159621.jpg";
import TopBanner from "../components/Banners/TopBanner";
import { useGetSearch } from "../dummy-api/fetchingHooks";
import TopicDisplay from "../components/TopicDisplay/TopicDisplay";

// displays search movie page

export default function SearchMoviePage({inputState}) {
  const getMovie = useGetSearch(inputState);

  return (
    <div>
      <TopBanner title="SEARCH" image={image} />
      <div className="separator" />
      <TopicDisplay getMovie={getMovie} />
    </div>
  );
}