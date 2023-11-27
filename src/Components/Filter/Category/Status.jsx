import React, { useState } from "react";
import FilterBTN from "../FilterBTN";
import "./Status.css";

// Status component for status filter
const Status = ({ updateStatus, updatePageNumber }) => {
  // Array of status options
  let status = ["Alive", "Dead", "Unknown"];

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
        Status
      </div>
      
      {/* Accordion collapse container */}
      <div className="accordianCollapse1 ">
        {/* Accordion body */}
        <div className="accordionBody1">
          {/* Mapping over status options to create filter buttons */}
          {status.map((item, index) => (
            <div className="filterItem" key={index}>
              {/* Filter button component */}
              <FilterBTN
                key={index}
                index={index}
                name="status"
                task={updateStatus}
                updatePageNumber={updatePageNumber}
                input={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
