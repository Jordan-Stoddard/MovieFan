import React from "react";
import { navDB } from "../../dummy-api/nav-data";
import NavComponent from "../Navigation/NavComponent";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="portfolio-side">
        <div className="footer-title-container">
          <h1 className="footer-title" data-aos="fade-right">MOVIE FAN</h1>
          <div className="footer-nav-item-container" data-aos="fade-right">
          {navItems()}
          </div>
        </div>

        <section className="footer-section-top">
          <p className="footer-p">Portfolio:</p>
          <a
            target="_blank"
            className="footer-a"
            href="https://www.google.com/"
            rel="noopener noreferrer"
          >
            www.jordan-stoddard.portfolio
          </a>
        </section>

        <section className="footer-section-top">
          <p className="footer-p">Phone number:</p>
          <p className="footer-p">888-888-1337</p>
        </section>

        <section className="footer-section-copyright">
          <p className="footer-cp">Copyright ©2019</p>
          <p className="footer-cp">Code and design by Jordan Stoddard</p>
        </section>
      </div>

      <div className="contribution-side">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
          alt="database attribution"
          className="movie-db-img"
        />
        <div className="social-media-links">
          <a
            target="_blank"
            href="https://twitter.com/Jdogstoddard"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square fa-3x" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jordan-stoddard-aa928167/"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-3x" />
          </a>
          <a
            target="_blank"
            href="https://github.com/Jordan-Stoddard"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square fa-3x" />
          </a>
        </div>
      </div>
    </div> // end footer container
  );
}

// display helper function
function navItems() {
  return navDB.map(navItem => {
    if (navItem.navTitle === "input") {
      return null;
    } else {
      return <NavComponent key={navItem.id} navItem={navItem} />;
    }
  });
}
