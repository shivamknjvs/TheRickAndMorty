import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Species.css";

// Species component for species filter
const Species = ({ updateSpecies, updatePageNumber }) => {
  // Array of species options
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

  // State to manage accordion open/closed state
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  // Function to toggle accordion open/closed state
  const toggleAccordion = () => {
    // console.log("change from status");
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    // Accordion item container
    <div className="accordionItem">
      {/* Accordion header with click event for toggle */}
      <div className="accordionHeader" onClick={toggleAccordion} role="button">
        Species
      </div>
      
      {/* Accordion collapse container */}
      <div className="accordionCollapse1">
        {/* Accordion body */}
        <div className="accordionBody1">
          {/* Mapping over species options to create filter buttons */}
          {species.map((item, index) => (
            <div className="filterItem" key={index}>
              {/* Filter button component */}
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
