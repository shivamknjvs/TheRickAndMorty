import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Logo from "./logo.svg";
import "./Navbar.css";

// Navbar component with navigation links
const Navbar = () => {
  // Get the current id from the route parameters
  const { id } = useParams();

  return (
    <>
      {/* Navbar container */}
      <div className="navbar">
        {/* Left side of the navbar with logo and name */}
        <div className="left-side">
          <img src={Logo} alt="" />
          <div className="name">Rick & Morty</div>
        </div>
        
        {/* Right side of the navbar with navigation links */}
        <div className="Right-Side">
          {/* NavLink for Characters page */}
          <NavLink to="/" exact>
            {/* Characters link with conditional 'active' class */}
            <div className={`Characters ${id === "Characters" ? 'active' : ''}`}>Characters</div>
          </NavLink>
          
          {/* NavLink for Episodes page */}
          <NavLink to="/Episodes">
            {/* Episodes link with conditional 'active' class */}
            <div className={`Episodes ${id === 'Episodes' ? 'active' : ''}`}>Episodes</div>
          </NavLink>
          
          {/* NavLink for Locations page */}
          <NavLink to="/Locations" className={`Locations ${id === 'Locations' ? 'active' : ''}`}>
            {/* Locations link with conditional 'active' class */}
            <div>Locations</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
