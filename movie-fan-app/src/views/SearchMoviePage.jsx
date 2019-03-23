import React from "react";
import image from "../assets/abstract-art-artistic-1020315.jpg";
import TopBanner from "../components/Banners/TopBanner";
import { useGetSearch } from "../dummy-api/fetchingHooks";
import TopicDisplay from "../components/TopicDisplay/TopicDisplay";

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