import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; 

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <Link to={`${page}${id}`} key={id} className="card-link">
          <div className="card-container">
            <img className="card-image" src={image} alt="" />
            <div className="card-content">
              <div className="card-title">{name}</div>
              <div className="card-location">
                <div style={{fontWeight:"bold"}}>Last Location</div>
                <div>{location.name}</div>
              </div>
            </div>
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
    display = "No Characters Found :/";
  }

  return <div className="row">{display}</div>;
};

export default Card;
