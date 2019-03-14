import React from "react";
import { Jumbotron } from "reactstrap";

// Styles found in _homePageStyles

const HomeJumbotron = props => {
  return (
    <div>
      <Jumbotron className="home-jumbotron">
            <div className="jumbo-text-container">
              <h1 className="display-3">MovieFan</h1>
              <br />
              <p className="lead jumbotron-catchphrase">
                Explore. Discover. Remember.
              </p>
              <br />
              <p className="lead lead2">
                MovieFan allows you to browse movies from top rated to upcoming,
                from old favorites to the newest releases.
              </p>
            </div>

            <img
            className="jumbo-img"
              src={
                "https://image.tmdb.org/t/p/original/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg"
              }
              alt="cars movie poster"
            />
            
         
        
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;
