import React, { Component } from "react";
import { Carousel, CarouselItem} from "reactstrap";
import {Link} from 'react-router-dom'

class HomeCarousel extends Component {
  state = { activeIndex: 0 };

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.trending.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.trending.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.trending.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
        <Link to={`/details/movie/${item.id}`}>
          <div className="carousel-img" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}></div>
          </Link>
          <div className="carousel-text">
          <h3 className="carousel-genre">TRENDING</h3>
          <h2 className="carousel-title">{item.title}</h2>
          <h2 className="carousel-title">{item.name}</h2>
          <p>{`Rating | ${item.vote_average} out of 10`}</p>
          </div>
          </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
      </Carousel>
    );
  }
}

export default HomeCarousel;
