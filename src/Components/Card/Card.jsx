import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    // Map through the results to create individual card elements
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        // Link to the detailed view of the character
        <Link to={`${page}${id}`} key={id} className="card-link">
          <div className="card-container">
            {/* Character image */}
            <img className="card-image" src={image} alt="" />
            <div className="card-content">
              {/* Character name */}
              <div className="card-title">{name}</div>
              {/* Last location of the character */}
              <div className="card-location">
                <div style={{ fontWeight: "bold" }}>Last Location</div>
                <div>{location.name}</div>
              </div>
            </div>
            {/* Status badge indicating if the character is Alive, Dead, or Unknown */}
            <div
              className={`status-badge ${
                status === "Dead"
                  ? "status-dead"
                  : status === "Alive"
                  ? "status-alive"
                  : "status-unknown"
              }`}
            >
              {status}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    // Display a message if no characters are found
    display = "No Characters Found :/";
  }

  return <div className="row">{display}</div>;
};

export default Card;
