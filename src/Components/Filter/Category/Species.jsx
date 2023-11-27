// Species.jsx

import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Species.css";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    console.log("change from status");
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="accordionItem">
      <div
        className="accordionHeader"
        onClick={toggleAccordion}
        role="button"
      >
        Species
      </div>
      <div
        className="accordionCollapse1"
      >
        <div className="accordionBody1">
          {species.map((item, index) => (
            <div className="filterItem" key={index}>
              <FilterBTN
                name="species"
                index={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
