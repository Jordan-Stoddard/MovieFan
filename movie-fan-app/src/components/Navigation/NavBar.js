import React from "react";
import { Link } from "react-router-dom";
import { navDB } from "../../dummy-api/nav-data";
import NavComponent from "./NavComponent";
import SearchInput from "./SearchInput";
import logo from "../../assets/pexels-photo-1282315.jpeg";

export default function NavBar({setInputStateFunc}) {
  return (
    <nav className="nav-bar-container">
    <div className="nav-bar-container-2">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-bar-brand" />
        </Link>
        <SearchInput setInputStateFunc={setInputStateFunc}/>
        </div>
        <div className="nav-bar-container-3">
        {navDB.map(navItem => {
          
            return (<NavComponent key={navItem.id} navItem={navItem} />);
        })}
        </div>
    </nav>
  );
}
