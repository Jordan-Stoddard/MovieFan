import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import logo from '../../Assets/pexels-photo-1282315.jpeg'

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <Navbar >
        <NavbarBrand><img src={logo} alt="logo" className="nav-bar-brand"/></NavbarBrand>
        <NavItem>Discover</NavItem>
        <NavItem>Popular</NavItem>
        <NavItem>Top Rated</NavItem>
        <NavItem>
          <input 
          className="nav-bar-search"
          placeholder="Search..."
          />
        </NavItem>
        <NavItem>Upcoming</NavItem>
        <NavItem>Now Playing</NavItem>
        <NavItem>TV Shows</NavItem>
      </Navbar>
    </div>
  );
}
