import React, { useState } from "react";
import image from "../assets/abstract-art-artistic-1020315.jpg";
import TopBanner from "../components/Banners/TopBanner";
import { useGetTopic } from "../dummy-api/fetchingHooks";
import ButtonContainer from "../components/Buttons/ButtonContainer";
import TopicDisplay from "../components/TopicDisplay/TopicDisplay";

// displays popular page

export default function Popular({ topic }) {
  const [page, setPage] = useState(1);
  const getMovie = useGetTopic(topic, page);

  return (
    <div>
      <TopBanner title="POPULAR" image={image} />
      <div className="separator" />
      <ButtonContainer page={page} setPage={setPage}/>
      <TopicDisplay getMovie={getMovie} />
    </div>
  );
}
