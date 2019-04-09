import React from "react";
import image from "../assets/book-books-bookshelf-159621.jpg";
import TopBanner from "../components/Banners/TopBanner";
import { useGetTVSearch } from "../dummy-api/fetchingTVHooks";
import TopicDisplay from "../components/TopicDisplay/TopicDisplay";

// displays search TV page

export default function SearchTVPage({inputState}) {
  const getMovie = useGetTVSearch(inputState);

  return (
    <div>
      <TopBanner title="SEARCH" image={image} />
      <div className="separator" />
      <TopicDisplay getMovie={getMovie} />
    </div>
  );
}