import React from "react";
import { Jumbotron, Container } from "reactstrap";

const HomeJumbotron = props => {
  return (
    <div>
      <Jumbotron className="home-jumbotron">
        <Container>
          <div className="jumbo-container">

            <div >
              <h1 className="display-3">MovieFan</h1>
              <br />
              <p className="lead jumbotron-catchphrase">
                Explore. Discover. Remember.
              </p>
              <br />
              <p className="lead">
                MovieFan allows you to browse movies from top rated to upcoming,
                from old favorites to the newest releases.
              </p>
            </div>

            <img
            className="jumbo-img"
              src={
                "https://image.tmdb.org/t/p/w500/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg"
              }
              alt="cars movie poster"
            />
            
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;
