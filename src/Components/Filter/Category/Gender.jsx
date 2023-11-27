import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Gender.css";

// Gender component for gender filter
const Gender = ({ updateGender, updatePageNumber }) => {
  // Array of gender options
  const genders = ["female", "male", "genderless", "unknown"];
  
  // State to manage accordion open/closed state
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  // Function to toggle accordion open/closed state
  const toggleAccordion = () => {
    console.log("change from gender");
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    // Accordion item container
    <div className="accordionItem">
      {/* Accordion header with click event for toggle */}
      <div className="accordionHeader" onClick={toggleAccordion} role="button">
        Gender
      </div>
      
      {/* Accordion collapse container */}
      <div className="accordionCollapse">
        {/* Accordion body */}
        <div className="accordionBody">
          {/* Mapping over gender options to create filter buttons */}
          {genders.map((item, index) => (
            <div className="filterItem" key={index}>
              {/* Filter button component */}
              <FilterBTN
                name="gender"
                index={index}
                updatePageNumber={updatePageNumber}
                task={updateGender}
                input={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
