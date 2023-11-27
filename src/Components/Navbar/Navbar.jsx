import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Logo from "./logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const { id } = useParams();

  return (
    <>
      <div className="navbar">
        <div className="left-side" >
         <img src={Logo} alt="" />
          <div className="name">Rick & Morty</div>
        </div>
        <div className="Right-Side">
          <NavLink to="/" exact>
            <div className={`Characters ${id === "Characters" ? 'active' : ''}`}>Characters</div>
          </NavLink>
          <NavLink to="/Episodes">
            <div className={`Episodes ${id === 'Episodes' ? 'active' : ''}`}>Episodes</div>
          </NavLink>
          <NavLink to="/Locations" className={`Locations ${id === 'Locations' ? 'active' : ''}`}>
            <div>Locations</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
