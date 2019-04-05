import React from "react";
import image from "../assets/abstract-art-artistic-1020315.jpg";
import TopBanner from "../components/Banners/TopBanner";
import { useGetTVSearch } from "../dummy-api/fetchingTVHooks";
import TopicDisplay from "../components/TopicDisplay/TopicDisplay";

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