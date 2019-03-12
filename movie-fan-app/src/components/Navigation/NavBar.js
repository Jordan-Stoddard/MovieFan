import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import { navDB } from "../../dummy-api/nav-data";
import NavComponent from "./NavComponent";
import SearchInput from "./SearchInput";
import logo from "../../assets/pexels-photo-1282315.jpeg";

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <Navbar>
        <Link to="/">
          <img src={logo} alt="logo" className="nav-bar-brand" />
        </Link>

        {navDB.map(navItem => {
          if (navItem.navTitle === "input") {
            return <SearchInput key={navItem.id} />;
          } else {
            return <NavComponent key={navItem.id} navItem={navItem} />;
          }
        })}
      </Navbar>
    </div>
  );
}
